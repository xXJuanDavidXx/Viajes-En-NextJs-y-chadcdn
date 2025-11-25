import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface Props {
  name: string;
  program: string;
  description: string;
  children: React.ReactNode;
}

/**
 * Tarjeta propia para presentar la información de nosotros
 */
export default function StudentCard({ name, program, description, children }: Props) {
  return (
    <Card className="grid grid-cols-2 grid-rows-2 gap-4 w-full max-w-3xl">
      <CardHeader className="row-span-2">
        {children}
      </CardHeader>
      <CardContent>
        <CardTitle>
          {name}
        </CardTitle>
        <CardDescription>
          {program}
        </CardDescription>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          {description}
        </p>
      </CardContent>
      <CardFooter className="col-start-2">
        <Button>
          <Link href="/proyecto">Ir a proyecto</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
