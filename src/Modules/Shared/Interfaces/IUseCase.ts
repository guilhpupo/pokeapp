export interface IUseCase<Params, Results> {
  execute(params?: Params): Results;
}
