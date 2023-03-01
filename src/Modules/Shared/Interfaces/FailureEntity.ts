import { IEntity } from "./IEntity";

type Props = {
  fileName: string;
  message?: string;
};

export class FailureEntity implements IEntity<Props> {
  constructor(public props: Props) {}
}
