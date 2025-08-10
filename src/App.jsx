import { Routes, Route } from 'react-router-dom';
import Navbar from './components/layouts/Navbar.jsx';
import Footer from './components/layouts/Footer.jsx';
import HomePage from './components/pages/HomePage.jsx';
import AddItemPage from './components/pages/AddItemPage.jsx';
import EditItemPage from './components/pages/EditItemPage.jsx';
import ViewItemsPage from './components/pages/ViewItemsPage.jsx';
import ItemDetailsView from './components/views/ItemDetailsView.jsx';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow container mx-auto p-4">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/items" element={<ViewItemsPage />} />
          <Route path="/items/:id" element={<ItemDetailsView />} />
          <Route path="/add-item" element={<AddItemPage />} />
          <Route path="/edit-item/:id" element={<EditItemPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;