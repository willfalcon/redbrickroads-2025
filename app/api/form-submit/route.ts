import { tokenClient } from '@/sanity/lib/client';

import { NextRequest } from "next/server";

// Disable bodyParser to handle multipart/form-data
// export const config = {
//   api: {
//     bodyParser: false,
//   },
// };



export async function POST(request: NextRequest) {

  const formData = await request.formData();

  // console.log(formData);
  
  const keys = formData.keys();
  const fileKeys = Array.from(keys).filter(key => key.startsWith('[file] '));

  // upload any files to sanity and collect their references
  const files = await Promise.all(
    fileKeys.map(async key => {
      const file: File | null = formData.get(key) as unknown as File;
      if (file) {
        try {
          const uploadRes = await tokenClient.assets.upload('file', file, {filename: file.name});

          return {
            _type: 'field',
            name: key, 
            value: file.name, 
            file: {
              _type: 'file',
              asset: {
                _type: 'reference',
                _ref: uploadRes._id,
              }
            }
          };
        } catch(err) {
          console.error('upload failed: ', err);
          return null;
        }
      }
      return null;
    })
  );
  

  const fields = Array.from(formData.entries()).filter(([key]) => !key.startsWith('[file] ') && key !== 'form');

  const entry = {
    _type: 'entry',
    form: {
      _type: 'reference',
      _ref: formData.get('form'),
    },
    fields: [
      ...fields.map(([name, value]) => ({
        name,
        value,
      })),
      ...files
    ],
  };

  try {
    await new Promise(async (resolve, reject) => {
      try {
        const res = await tokenClient.create(entry, {autoGenerateArrayKeys: true});
        console.log('success');
        resolve(res);
      } catch(err) {
        console.log('submit error: ', err);
        reject(err);
      }
    });
  } catch(err) {
    return Response.json({success: false, message: 'Something went wrong', error: err})
  }
  
  return Response.json({success: true, message: 'I think that worked', error: null});
  // Response.json({success: false, err})
}


  
