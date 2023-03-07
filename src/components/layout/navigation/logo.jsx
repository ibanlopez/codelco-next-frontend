import Image from 'next/image';
import logotipo from './logo-codelco-levante.jpg';

const Logo = () => {
  return (
    <div className="col-span-full sm:col-start-1 sm:col-end-2">
      <Image
        className="mx-auto sm:mx-0"
        src={logotipo}
        alt="Logo Codelco Levante"
        priority
      />
    </div>
  );
};

export default Logo;
