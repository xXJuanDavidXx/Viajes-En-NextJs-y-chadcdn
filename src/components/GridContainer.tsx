interface Props {
  children: React.ReactNode;
};

/**
 *grid para organizar los componentes en 3 columnas
 */
export default function GridContainer({ children }: Props) {
  return (
    <div className={`grid grid-cols-3 justify-items-center gap-y-6`}>
      {children}
    </div>
  );
}
