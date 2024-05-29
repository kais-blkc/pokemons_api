import { Button, Grid } from '@mui/material';
import Image from 'next/image';
import { FC } from 'react';

export const Header: FC = () => {
  return (
    <header>
      <div className="container">
        <Grid container direction="row" justifyContent="space-between" alignItems="center" gap={3}>
          <Button variant="outlined" color="inherit">
            Покемоны API
          </Button>

          <div className="flex-img-text">
            <Image src="/hand.svg" alt="Нажмите на нужное Покемона" width={24} height={30} />
            <p>
              Нажмите на <br />
              нужного Покемона
            </p>
          </div>
        </Grid>
      </div>
    </header>
  );
};
