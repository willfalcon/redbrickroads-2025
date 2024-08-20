type PrepareProps = {
  title: string,
  required: boolean
}

export default {
  select: {
    title: 'name',
    required: 'fieldOptions.required',
  },
  prepare({ title, required }: PrepareProps) {
    return {
      title: `${title}${required ? '*' : ''}`,
    };
  },
};
