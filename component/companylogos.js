import React from "react";
import Link from "next/link";

const companylogos = () => {
  return (
    <div className="bg-white py-6 px-4 rounded-md shadow-md border border-gray-200">
    <div className="text-center text-sm text-gray-600 font-medium mb-4">
      Trusted by learners with support from
    </div>
    <div className="flex justify-center items-center flex-wrap gap-8">
      <img src="/logos/github.png" alt="GitHub" className="h-8 object-contain" />
      <img src="/logos/google.png" alt="Google" className="h-8 object-contain" />
      <img src="/logos/microsoft.png" alt="Microsoft" className="h-8 object-contain" />
      <img src="/logos/aws.png" alt="AWS" className="h-8 object-contain" />
    </div>
  </div>

  );
};

export default companylogos;
