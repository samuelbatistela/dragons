import * as Yup from 'yup';

const validationSchema = Yup.object({
  user: Yup.string().required('Usuário é obrigatório'),
  password: Yup.string().required('Senha é obrigatória'),
});

export default validationSchema;
