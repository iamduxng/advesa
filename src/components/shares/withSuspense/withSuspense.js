import React, { Suspense, forwardRef } from 'react';
import { LoadingSpinner } from 'components/shares';

const withSuspense = (InnerComponent) => {
  const Component = forwardRef((props, ref) => {
    return (
      <Suspense fallback={<LoadingSpinner/>}>
        <InnerComponent {...props} forwardedRef={ref}/>
      </Suspense>
    );
  });
  return Component;
}

export default withSuspense;