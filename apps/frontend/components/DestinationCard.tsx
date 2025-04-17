import React from 'react';
import { Card, CardContent, CardTitle, CardDescription, CardLocation, CardImage } from '@copa/ui';

const DestinationCard = ({ name, description, location, imageUrl }) => {
  return (
    <Card>
      <CardImage src={imageUrl} alt={name} />
      <CardContent>
        <CardTitle>{name}</CardTitle>
        <CardDescription>{description}</CardDescription>
        <CardLocation>{location}</CardLocation>
      </CardContent>
    </Card>
  );
};

export default DestinationCard;
