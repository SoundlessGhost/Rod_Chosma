import React from "react";

const CatalogPage = () => {
  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <object
        data="/catalog.pdf"
        type="application/pdf"
        width="100%"
        height="100%"
      >
        <p>
          PDF দেখতে সমস্যা হলে
          <a href="/your-file.pdf" target="_blank" rel="noopener noreferrer">
            এখানে ক্লিক করুন
          </a>
        </p>
      </object>
    </div>
  );
};

export default CatalogPage;
