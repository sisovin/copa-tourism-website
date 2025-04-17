import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import axios from 'axios';

const PackageDetail = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [packageDetail, setPackageDetail] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (slug) {
      const fetchPackage = async () => {
        try {
          const response = await axios.get(`/packages/${slug}`);
          setPackageDetail(response.data);
        } catch (err) {
          setError('Error fetching package');
        } finally {
          setLoading(false);
        }
      };

      fetchPackage();
    }
  }, [slug]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="container mx-auto p-4">
      {packageDetail ? (
        <>
          <h1 className="text-2xl font-bold mb-4">{packageDetail.name}</h1>
          <p className="text-gray-700 mb-4">{packageDetail.description}</p>
          <p className="text-gray-500 mb-4">${packageDetail.price}</p>
        </>
      ) : (
        <p>Package not found</p>
      )}
    </div>
  );
};

export default PackageDetail;
