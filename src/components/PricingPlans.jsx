import { useTranslation } from 'react-i18next';

function PricingPlan() {
  const { t } = useTranslation();
  return (
    <div className='relative'>
      {/* Container to make its contents centered */}
      <div className='px-10 min-h-screen flex justify-center items-center'>
        {/* Card container */}
        <div className='border border-slate-200 shadow-lg p-8 bg-white rounded-2xl relative w-1/5 flex flex-col items-center'>
          <h3 className='text-lg font-semibold leading-5'>{t('plan_name')}</h3>
          <p className='absolute top-0 -translate-y-1/2 bg-cyan-500 text-white px-3 py-0.5 text-sm font-semibold tracking-wide rounded-full shadow-md'>
            {t('tag_title')}
          </p>
          <p className='mt-4 text-slate-700 text-sm leading-6 text-center'>
            {t('plan_description')}
          </p>
          {/* Price container */}
          <div className='mt-4 rounded-lg bg-slate-50 p-6 -mx-6'>
            <p className='text-sm font-semibold text-slate-500 flex items-center'>
              <span>{t('plan_currency')}</span>
              <span className='text-4xl text-slate-900 ml-3'>$32</span>
              <span className='ml-1.5'>/{t('plan_frequency')}</span>
            </p>
          </div>

          {/* CTA Button */}
          <a
            href='#'
            className='mt-8 block px-6 py-4 text-sm font-semibold leading-4 text-center rounded-lg bg-cyan-500 text-white hover:bg-cyan-600 shadow-md'
          >
            {t('plan_cta')}
          </a>
        </div>
      </div>
    </div>
  );
}

export default PricingPlan;
