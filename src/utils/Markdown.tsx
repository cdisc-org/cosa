// eslint-disable-next-line import/named
import ReactMarkdown from 'react-markdown';
import Typography from '@mui/material/Typography';
import remarkGfm from 'remark-gfm';

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

const Markdown: React.FC = ({ children }) => {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        h1: muiHeading,
        h2: muiHeading,
        h3: muiHeading,
        h4: muiHeading,
        h5: muiHeading,
        h6: muiHeading,
        p: muiText,
      }}
    >
      {children as string}
    </ReactMarkdown>
  );
};

export default Markdown;
