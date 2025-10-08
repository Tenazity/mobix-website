import React from 'react';
import Products from './Products.jsx';

const ProductModal = ({ open, onClose }) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Modal panel */}
      <div className="relative z-10 w-[95%] max-w-5xl max-h-[85vh] overflow-y-auto bg-[#0e0e0e] border border-[#2a2a2a] rounded-2xl p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-semibold">Our Products</h3>
          <button
            className="h-9 w-9 flex items-center justify-center rounded-full border border-[#2a2a2a] hover:bg-[#1a1a1a]"
            onClick={onClose}
            aria-label="Close products"
          >
            <i className="bx bx-x text-xl"></i>
          </button>
        </div>

        <Products />
      </div>
    </div>
  )

};

export default ProductModal;


