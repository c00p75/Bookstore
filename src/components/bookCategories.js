import { useSelector } from 'react-redux';

const Categories = () => {
  const status = useSelector((state) => state.status);
  return (
    <div className="container py-4">
      <h1 className="py-4">{status}</h1>
    </div>
  );
};

export default Categories;
