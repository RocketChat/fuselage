import React, { FC } from 'react';

export const MessagePreviewGenericFile: FC<{ extension: string }> = ({
  extension,
  children,
}) => (
  <div className='rcx-message-generic-preview__file'>
    {children || (
      <svg
        width='36'
        height='44'
        viewBox='0 0 36 44'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <mask id='path-1-inside-1' fill='white'>
          <path
            fill-rule='evenodd'
            clip-rule='evenodd'
            d='M5 0C2.23858 0 0 2.23858 0 5V39C0 41.7614 2.23858 44 5 44H31C33.7614 44 36 41.7614 36 39V12L30 6L24 0H5Z'
          />
        </mask>
        <path
          fill-rule='evenodd'
          clip-rule='evenodd'
          d='M5 0C2.23858 0 0 2.23858 0 5V39C0 41.7614 2.23858 44 5 44H31C33.7614 44 36 41.7614 36 39V12L30 6L24 0H5Z'
          fill='white'
        />
        <path
          d='M36 12H38C38 11.4696 37.7893 10.9609 37.4142 10.5858L36 12ZM24 0L25.4142 -1.41421C25.0391 -1.78929 24.5304 -2 24 -2V0ZM2 5C2 3.34315 3.34315 2 5 2V-2C1.13401 -2 -2 1.13401 -2 5H2ZM2 39V5H-2V39H2ZM5 42C3.34315 42 2 40.6569 2 39H-2C-2 42.866 1.13401 46 5 46V42ZM31 42H5V46H31V42ZM34 39C34 40.6569 32.6569 42 31 42V46C34.866 46 38 42.866 38 39H34ZM34 12V39H38V12H34ZM37.4142 10.5858L31.4142 4.58579L28.5858 7.41421L34.5858 13.4142L37.4142 10.5858ZM31.4142 4.58579L25.4142 -1.41421L22.5858 1.41421L28.5858 7.41421L31.4142 4.58579ZM5 2H24V-2H5V2Z'
          fill='currentColor'
          mask='url(#path-1-inside-1)'
        />
      </svg>
    )}
    <span className='rcx-message-generic-preview__file-extension'>
      {extension}
    </span>
  </div>
);
