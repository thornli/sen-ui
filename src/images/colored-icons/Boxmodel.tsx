import * as React from 'react';
import { SVGProps } from 'react';

interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgBoxmodel = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    viewBox="0 0 48 48"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g fill="none" fillRule="evenodd">
      <path
        d="M4 4h40a4 4 0 0 1 4 4v32a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V8a4 4 0 0 1 4-4z"
        fill="#FEFAD2"
      />
      <path
        d="M4.8 5h3V4h-3v1zm5 0h3V4h-3v1zm8 0V4h-3v1h3zm2 0h3V4h-3v1zm8 0V4h-3v1h3zm2 0h3V4h-3v1zm8 0V4h-3v1h3zm5 0V4h-3v1h3zm4 2.6 1-.3a4.8 4.8 0 0 0-2.6-2.8l-.4.9c1 .4 1.7 1.2 2 2.2zm.2 5h1v-3h-1v3zm0 5h1v-3h-1v3zm0 2v3h1v-3h-1zm0 8h1v-3h-1v3zm0 5h1v-3h-1v3zm0 5h1v-3h-1v3zm-1.5 4.6.6.8c1-.8 1.7-2 1.9-3.3h-1c-.1 1-.7 2-1.5 2.5zm-2.3.8h-2.6v1h3.1v-1a4 4 0 0 1-.5 0zm-7.6 0v1h3v-1h-3zm-5 0v1h3v-1h-3zm-5 0v1h3v-1h-3zm-5 0v1h3v-1h-3zm-5 0v1h3v-1h-3zm-5 0v1h3v-1h-3zm-5 0v1h3v-1h-3zm-4.2-2.2-1 .4a4.8 4.8 0 0 0 2.9 2.5l.3-.9c-1-.3-1.8-1-2.2-2zm-.4-2v-3H0v3h1zm0-5v-3H0v3h1zm0-5v-3H0v3h1zm0-5v-3H0v3h1zm0-5v-3H0v3h1zm0-5v-3H0v3h1zm0-5c0-1 .5-2 1.2-2.8l-.7-.7C.5 6.3 0 7.5 0 8.8h1zM4.8 4l-1 .1.1 1 .9-.1V4z"
        fill="#FDDA9F"
        fillRule="nonzero"
      />
      <path
        d="M10 10h28a4 4 0 0 1 4 4v20a4 4 0 0 1-4 4H10a4 4 0 0 1-4-4V14a4 4 0 0 1 4-4z"
        fill="#B1E0FF"
      />
      <path
        d="M10 10h28a4 4 0 0 1 4 4v20a4 4 0 0 1-4 4H10a4 4 0 0 1-4-4V14a4 4 0 0 1 4-4zm0 1a3 3 0 0 0-3 3v20a3 3 0 0 0 3 3h28a3 3 0 0 0 3-3V14a3 3 0 0 0-3-3H10z"
        fill="#94D5FD"
        fillRule="nonzero"
      />
      <path
        d="M16 16h16a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H16a4 4 0 0 1-4-4v-8a4 4 0 0 1 4-4z"
        fill="#AAD895"
      />
      <path
        d="M18.2 16v1h-1.9v-1h2zm3.9 0v1h-2v-1h2zm3.8 0v1H24v-1h2zm3.9 0v1h-2v-1h2zm4 .5-.5.9a3 3 0 0 0-1.6-.5V16c.7 0 1.4.2 2 .5zM36 20h-1c0-.5-.2-1-.5-1.5l.8-.5c.4.6.7 1.3.7 2zm0 3.9h-1V22h1v1.9zm0 3.8h-1v-2h1v2zm-2 3.6-.4-.8a3 3 0 0 0 1-1.2l1 .4c-.4.6-1 1.2-1.5 1.6zm-4 .7v-1h1.9v1H30zm-3.8 0v-1H28v1h-2zm-3.9 0v-1h2v1h-2zm-3.8 0v-1h1.9v1h-2zm-4-.4.4-.9c.4.2 1 .4 1.4.4h.3v.9h-.3c-.6 0-1.3-.1-1.8-.4zM12 28.2h1c0 .5.3 1 .6 1.5l-.8.5c-.4-.6-.7-1.2-.8-2zm0-3.9h1v2h-1v-2zm0-3.7h1v1.9h-1v-2zm1.7-3.7.6.7a3 3 0 0 0-1 1.3l-1-.4c.4-.6.8-1.2 1.4-1.6zm2.6-.9v1h-.4l-.1-1h.5z"
        fill="#88D166"
        fillRule="nonzero"
      />
    </g>
  </svg>
);

export default SvgBoxmodel;
