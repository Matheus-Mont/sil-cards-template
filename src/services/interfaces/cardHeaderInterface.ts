interface CardHeaderInterface {
  icon: string;
  title: string;
  options: string[];
  select: boolean;
  newSearch?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

export default CardHeaderInterface;
