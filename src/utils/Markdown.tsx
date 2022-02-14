// eslint-disable-next-line import/named
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import remarkGfm from 'remark-gfm';
import '../components/css/general.css';

type Heading = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

const muiHeading = ({
  node,
  level,
  ...props
}: {
  node: object;
  level: number;
}) => (
  <Typography
    variant={`h${level}` as Heading}
    {...props}
    sx={level > 4 ? { my: 1 } : { my: 2 }}
  />
);

const muiText = ({ node, ...props }: { node: object }) => (
  <Typography variant='body1' {...props} />
);

const muiLink = ({ node, ...props }: { node: object }) => {
  return <Link target='_blank' {...props} />;
  /* @TODO, do not _blank internal links
  if (href.includes('http')) {
    return <Link target='_blank' {...props} />;
  } else {
    return <Link {...props} />;
  }
  */
};

/*
@TODO: get the muiCode somehow standalone and not integrated as below
const muiCode = ({
  node,
  inline,
  className,
  children,
  ...props
}: {
  node: object;
  inline: boolean;
  className: string;
  children: object;
}) => {
  const match = /language-(\w+)/.exec(className || '');
  return !inline && match ? (
    <SyntaxHighlighter
      children={String(children).replace(/\n$/, '')}
      language={match[1]}
      PreTag='div'
      {...props}
    />
  ) : (
    <code className={className} {...props}>
      {children}
    </code>
  );
};
*/

const Markdown: React.FC = (item) => {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      className='markdownArea'
      components={{
        h1: muiHeading,
        h2: muiHeading,
        h3: muiHeading,
        h4: muiHeading,
        h5: muiHeading,
        h6: muiHeading,
        p: muiText,
        a: muiLink,
        code({ node, inline, className, children, ...props }) {
          const match = /language-(\w+)/.exec(className || '');
          return !inline && match ? (
            <SyntaxHighlighter
              children={String(children).replace(/\n$/, '')}
              language={match[1]}
              PreTag='div'
              {...props}
            />
          ) : (
            <code className={className} {...props}>
              {children}
            </code>
          );
        },
      }}
    >
      {item.children as string}
    </ReactMarkdown>
  );
};

export default Markdown;
