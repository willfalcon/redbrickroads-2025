import React, { useState, useEffect } from 'react';
// import FormField from 'part:@sanity/components/formfields/default';

// import sanityClient from '@sanity/client';
import {client} from '../../lib/client';
// import PatchEvent, { set, unset } from 'part:@sanity/form-builder/patch-event';

// const createPatch = value =>
  // PatchEvent.from(value === '' ? unset() : set(value));

// const client = sanityClient({
//   projectId: '0ny3ua3p',
//   dataset: 'production',
//   // token: 'sanity-auth-token', // or leave blank to be anonymous user
//   // useCdn: true // `false` if you want to ensure fresh data
// });

const AnchorLink = React.forwardRef((props, ref) => {
  console.log(props);
  const [options, setOptions] = useState([]);
  useEffect(() => {
    const id = window.location.pathname
      .split('/')[2]
      .split(';')[1]
      .split('%')[0];
    client.fetch('*[_id == $id]', { id }).then(res => {
      // console.log(res);
      const options = res[0].blocks.map(block => ({
        slug: block.slug.current,
        title: block.heading,
      }));
      setOptions(options);
    });
  }, []);

  console.log(options);
  return (
    // <FormField>
    //   {options.map(({ title, slug }) => {
    //     return (
    //       <div key={slug}>
    //         <input
    //           type="radio"
    //           value={slug}
    //           onChange={() => props.onChange(createPatch(slug))}
    //           checked={props.value === slug}
    //           ref={ref}
    //           id={slug}
    //           name={props.type.name}
    //           style={{ marginRight: '10px' }}
    //         />
    //         <label htmlFor={slug}>{title}</label>
    //       </div>
    //     );
      // })}
    // </FormField>
    <></>
  );
});

export default {
  name: 'pageLink',
  title: 'Page Link',
  type: 'object',
  fields: [
    {
      name: 'link',
      title: 'Link',
      type: 'reference',
      to: [{ type: 'page' }, { type: 'home' }, { type: 'lineupPage' }],
    },
    {
      name: 'anchor',
      title: 'Anchor Link',
      type: 'string',
      inputComponent: AnchorLink,
    },
    {
      name: 'externalUrl',
      title: 'External Url',
      type: 'url',
    },
    {
      name: 'subMenu',
      title: 'Sub Menu',
      type: 'array',
      of: [{ type: 'pageLink' }],
    },
  ],
};
