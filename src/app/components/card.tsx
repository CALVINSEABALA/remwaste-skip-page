'use client';
import { useState } from 'react';
import { SKIPITEM } from '../models/skip-object';

export default function Card({ isSelected, onSelect, ...cardData }: SKIPITEM){
  ;
  

  const imageBaseUrl = process.env.NEXT_PUBLIC_SKIP_IMAGE_BASE;
  const imageSrc = `${imageBaseUrl}/${cardData.size}-yarder-skip.jpg`;



  return (
    <div
      className={`card-glass ${isSelected ? 'card-glass-selected' : ''} ${!cardData.allowed_on_road ? 'opacity-50 pointer-events-none' : ''}`}
      onClick={() => cardData.allowed_on_road && onSelect && onSelect()}
    >
      <div className="relative">
        <img src={imageSrc} alt={`${cardData.size} Yard Skip`} className="skip-image" />
        <div className={`skip-status ${cardData.allowed_on_road ? 'skip-status-allowed' : 'skip-status-blocked'}`}>
          {cardData.allowed_on_road ? cardData.size+' Yard Skip' : 'Not Allowed on this road'}
        </div>
      </div>

      <h3 className="skip-heading">{cardData.size} Yard Skip</h3>
      <p className="skip-details">{cardData.hire_period_days} day hire period</p>
      <div className="skip-price">£{cardData.price_before_vat}</div>

      <button
        type="button"
        className={`skip-button ${isSelected ? 'skip-button-selected' : 'skip-button-default'}`}
      >
        <span>{isSelected ? 'Selected' : 'Select This Skip'}</span>
        <svg
          className="w-4 h-4"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          viewBox="0 0 24 24"
        >
          <path d="M5 12h14" />
          <path d="m12 5 7 7-7 7" />
        </svg>
      </button>
    </div>
  );
}
