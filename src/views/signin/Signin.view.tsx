import Button from '@/components/button/Button.component';
import useTheme from '@/io/redux/theme/useTheme.hook';
import { FC } from 'react';

const SigninView: FC = () => {
  const { toggleTheme, theme } = useTheme();

  return (
    <div>
      <h1>Login</h1>
      <label>Tema selecionado: {theme}</label>
      <br></br>
      <Button onClick={toggleTheme} label="Mudar tema da aplicação!" />
    </div>
  );
};

export default SigninView;
