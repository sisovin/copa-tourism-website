import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import PackageCard from '../../components/PackageCard';

const PackageDetailPage = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [packageDetail, setPackageDetail] = useState(null);

  useEffect(() => {
    if (slug) {
      const fetchPackageDetail = async () => {
        try {
          const response = await fetch(`/packages/${slug}`);
          const data = await response.json();
          setPackageDetail(data);
        } catch (error) {
          console.error('Error fetching package details:', error);
        }
      };

      fetchPackageDetail();
    }
  }, [slug]);

  if (!packageDetail) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Package Details</h1>
      <PackageCard
        name={packageDetail.name}
        description={packageDetail.description}
        price={packageDetail.price}
        slug={packageDetail.slug}
      />
    </div>
  );
};

export default PackageDetailPage;
