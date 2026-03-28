export type ButtonVariant = 'primary' | 'secondary';

export const buildButtonClasses = (variant: ButtonVariant = 'primary') =>
  variant === 'primary'
    ? 'inline-flex items-center rounded-md bg-indigo-500 px-4 py-2 text-white'
    : 'inline-flex items-center rounded-md border border-slate-600 px-4 py-2 text-white';
