import * as React from 'react';
import { Header, Footer } from '../components/shared';
import { ReadingList } from '../components/app/reading-list';
import { booksApiHelper } from '../api/api-helpers';
import { ListBooksQuery, Book } from '../api/types/books';
import { GlobalContext } from '../contexts/global-context';
import { MetaHeader } from '../components/shared';

type ObjType = Record<string, unknown>;

class ReadingListPage extends React.Component<ObjType, ObjType> {
  static async getInitialProps(): Promise<ObjType> {
    let currentlyReadingBooks: Book[] | [];
    let finishedBooks: Book[] | [];

    try {
      const queryCurrentBooks: ListBooksQuery = { status: 'READING' };
      const queryFinishedBooks: ListBooksQuery = { status: 'FINISHED' };

      currentlyReadingBooks = await booksApiHelper.listBooks(queryCurrentBooks);
      finishedBooks = await booksApiHelper.listBooks(queryFinishedBooks);
    } catch (err) {
      console.error(err);
      currentlyReadingBooks = null;
      finishedBooks = null;
    }

    return { currentlyReadingBooks, finishedBooks };
  }

  componentDidMount(): void {
    const { currentlyReadingBooks, finishedBooks } = this.props;
    const { loadCurrentlyReadingBooks, loadFinishedBooks } = this.context;
    loadCurrentlyReadingBooks(currentlyReadingBooks);
    loadFinishedBooks(finishedBooks);
  }

  render(): React.ReactNode {
    const seo = {
      pageTitle: 'Check my reading list | yunjaeoh.com',
      metaDescription: ' ',
      indexStatus: true,
      urlPath: 'https://www.yunjaeoh.com/reading-list',
    };
    return (
      <>
        <MetaHeader {...seo} />
        <Header />
        <ReadingList />
        <Footer />
      </>
    );
  }
}

ReadingListPage.contextType = GlobalContext;

export default ReadingListPage;
