import { FooterBarProps } from "../models/footer-bar-props";



export default function FooterBar({ selectedSkip, onBack, onContinue }: FooterBarProps) {
  return (
    <div className=" absolute bottom-0 left-0 right-0 bg-[#1C1C1C] border-t border-[#2A2A2A] p-4 ">
      <div className="max-w-7xl mx-auto">

        <p className="mb-3 text-xs text-gray-400 text-center leading-snug">
          Imagery and information shown throughout this website may not reflect the exact shape or size specification. Colours may vary. Options and/or accessories may be featured at additional cost.
        </p>


        <div className="lg:hidden">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-medium">
              {selectedSkip ? `${selectedSkip.size} Yard Skip` : 'Select a Skip'}
            </h3>
            {selectedSkip && (
              <div>
                <span className="text-xl font-bold text-[#0037C1]">£{selectedSkip.price_before_vat}</span>
                <span className="text-sm text-gray-400 ml-2">{selectedSkip.hire_period_days} days</span>
              </div>
            )}
          </div>

          <div className="grid grid-cols-2 gap-3">
            <button className="btn-secondary w-full" onClick={onBack}>
              Back
            </button>
            <button
              className={`w-full ${selectedSkip ? 'btn-primary' : 'btn-disabled'}`}
              onClick={onContinue}
              disabled={!selectedSkip}
            >
              Continue
            </button>
          </div>
        </div>

    
        <div className="hidden lg:flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div>
              <p className="text-sm text-gray-400">
                {selectedSkip ? `${selectedSkip.size} Yard Skip` : 'No Skip Selected'}
              </p>
            </div>
            {selectedSkip && (
              <div>
                <span className="text-2xl font-bold text-[#0037C1]">£{selectedSkip.price_before_vat}</span>
                <span className="text-sm text-gray-400 ml-2">{selectedSkip.hire_period_days} day hire</span>
              </div>
            )}
          </div>

          <div className="flex items-center gap-4">
            <button className="btn-secondary" onClick={onBack}>
              Back
            </button>
            <button
              className={`flex items-center gap-2 ${selectedSkip ? 'btn-primary' : 'btn-disabled'}`}
              onClick={onContinue}
              disabled={!selectedSkip}
            >
              Continue
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-arrow-right w-4 h-4"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
