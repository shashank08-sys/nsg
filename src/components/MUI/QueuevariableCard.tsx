
import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';

import Typography from '@mui/material/Typography';

interface Props {
  onClick?: () => void;
}

export default function QueuevariableCard({ onClick }: Props) {
  return (
    <Card  onClick={onClick}
      sx={{
        cursor: "pointer",
        width: 250,
        padding: 2,
        borderRadius: 3,
        boxShadow: 3,
        "&:hover": { boxShadow: 6 }
      }}>
      <CardContent>
        <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
          Queue Variable
        </Typography>
      </CardContent>
      
    </Card>
  );
}
