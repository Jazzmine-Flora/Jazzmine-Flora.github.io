import React from "react";

type Props = {
  className?: string;
  title?: string;
};

export const GitHubIcon: React.FC<Props> = ({ className, title }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    width="20"
    height="20"
    fill="currentColor"
    role={title ? "img" : "presentation"}
    aria-label={title}
    aria-hidden={title ? undefined : true}
    focusable="false"
  >
    {title ? <title>{title}</title> : null}
    <path d="M12 2C6.477 2 2 6.484 2 12.02c0 4.43 2.865 8.19 6.839 9.517.5.092.682-.217.682-.483 0-.237-.009-.866-.014-1.7-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.907-.62.069-.608.069-.608 1.003.07 1.531 1.033 1.531 1.033.892 1.53 2.341 1.088 2.91.832.091-.648.349-1.088.635-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.254-.446-1.27.098-2.647 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.748-1.026 2.748-1.026.546 1.377.202 2.393.1 2.647.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.31.678.92.678 1.854 0 1.337-.013 2.415-.013 2.743 0 .268.18.58.688.481A10.02 10.02 0 0 0 22 12.02C22 6.484 17.523 2 12 2Z" />
  </svg>
);

export const LinkedInIcon: React.FC<Props> = ({ className, title }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    width="20"
    height="20"
    fill="currentColor"
    role={title ? "img" : "presentation"}
    aria-label={title}
    aria-hidden={title ? undefined : true}
    focusable="false"
  >
    {title ? <title>{title}</title> : null}
    <path d="M20.447 20.452H17.21v-5.569c0-1.328-.027-3.036-1.852-3.036-1.853 0-2.136 1.445-2.136 2.939v5.666H9.01V9h3.104v1.561h.044c.432-.818 1.49-1.681 3.066-1.681 3.278 0 3.881 2.158 3.881 4.966v6.606ZM5.337 7.433a1.804 1.804 0 1 1 0-3.607 1.804 1.804 0 0 1 0 3.607ZM6.956 20.452H3.716V9h3.24v11.452ZM22.225 0H1.771C.792 0 0 .774 0 1.727v20.545C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.273V1.727C24 .774 23.2 0 22.222 0h.003Z" />
  </svg>
);

