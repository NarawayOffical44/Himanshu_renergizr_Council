import { useLocation } from 'react-router';

const SITE = 'https://bharatgeoenergy.com';

export default function Page({ title, description, children }) {
  const { pathname } = useLocation();
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={SITE + pathname} />
      {children}
    </>
  );
}
