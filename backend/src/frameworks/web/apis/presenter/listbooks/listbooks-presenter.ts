import { IPresenterOutput, IPresenter } from '../../../../../app/domain/definition/presenter';
import { IListBooksOutput } from '../../../../../app/use-cases/listbooks/interfaces';
import { Book } from '../../../../../app/domain/entity/book';

export interface IListBooksPresenterOutput extends IPresenterOutput {
  books: Book[] | [];
}

export interface IListBooksQuery {
  status?: string;
}

export interface IListBooksPresenter extends IPresenter<IListBooksOutput> {
  present(data: IListBooksOutput, query?: IListBooksQuery): Promise<IListBooksPresenterOutput>;
}
