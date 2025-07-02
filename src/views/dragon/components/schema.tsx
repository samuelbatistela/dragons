import * as Yup from 'yup';

const validationSchema = Yup.object({
  name: Yup.string().required('Nome é obrigatório'),
  type: Yup.string().required('Tipo é obrigatório'),
});

export default validationSchema;
