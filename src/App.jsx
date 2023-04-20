import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import SokolPonno from "./pages/Home/SokolPonno";
import FolGach from "./pages/Home/FolGach";
import Fulgach from "./pages/Home/Fulgach";
import SovabordhonGach from "./pages/Home/SovabordhonGach";

// sub pages css file
import "./pages/Nursery/Nursery.css";
import ProductCategoryOutlet from "./pages/Nursery/ProductCategoryOutlet";
// folgach component
import DeshiFolGach from "./pages/Nursery/FolGach/DeshiFolGach";
import BideshiFolGach from "./pages/Nursery/FolGach/BideshiFolGach";
import BaromashiFolGach from "./pages/Nursery/FolGach/BaromashiFolGach";
// full gach component
import FulGach from "./pages/Nursery/FulGach/FulGach";
import DeshiFulGach from "./pages/Nursery/FulGach/DeshiFulGach";
import BideshiFulGach from "./pages/Nursery/FulGach/BideshiFulGach";
import BaromashiFulGach from "./pages/Nursery/FulGach/BaromashiFulGach";
import SugondhiFulGach from "./pages/Nursery/FulGach/SugondhiFulGach";
import LataJatiyoFulGach from "./pages/Nursery/FulGach/LataJatiyoFulGach";
import ShovamoyGach from "./pages/Nursery/ShovamoyGach/ShovamoyGach";
import IndoorPlants from "./pages/Nursery/ShovamoyGach/IndoorPlants";
import HangingPlants from "./pages/Nursery/ShovamoyGach/HangingPlants";
import KaktasPlants from "./pages/Nursery/ShovamoyGach/KaktasPlants";
import BonShai from "./pages/Nursery/ShovamoyGach/BonShai";
import Navbar from "./shear_component/navbar/navbar";
import Footer from "./shear_component/Footer/Footer";
import OushodhiGach from "./pages/Nursery/OushodhiGach";
import MoslaJatioGach from "./pages/Nursery/MoslaJatioGach";
import ShobjiJatioGach from "./pages/Nursery/ShobjiJatioGach";
import GardeningPackege from "./pages/Nursery/GardeningPackege";
import TobOjioBag from "./pages/BaganAnushangik/TobOjioBag";
import JoiboSharOKitnasok from "./pages/BaganAnushangik/JoiboSharOKitnasok";
import CunaPathor from "./pages/BaganAnushangik/CunaPathor";
import GardeningTools from "./pages/Other/GardeningTools";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home></Home>}>
          <Route index element={<SokolPonno></SokolPonno>} />
          <Route path="folgach" element={<FolGach></FolGach>} />
          <Route path="fulgach" element={<Fulgach></Fulgach>} />
          <Route path="sovabordhon" element={<SovabordhonGach></SovabordhonGach>} />
        </Route>

        <Route path="/" element={<Home />}>
          <Route index element={<SokolPonno />} />
          <Route path="folgach" element={<FolGach />} />
          <Route path="fulgach" element={<Fulgach />} />
          <Route path="sovabordhon" element={<SovabordhonGach />} />
        </Route>


        {/* nursery page Route */}
        <Route path="product-category/ফল-গাছ" element={<ProductCategoryOutlet />}>

          <Route index element={<FolGach />} />
          <Route path="দেশি-ফল-গাছ" element={<DeshiFolGach />} />
          <Route path="বিদেশি-ফল-গাছ" element={<BideshiFolGach />} />
          <Route path="বারমাসি-ফল-গাছ" element={<BaromashiFolGach />} />
        </Route>
        <Route path="product-category/ফুল-গাছ" element={<ProductCategoryOutlet />}>
          <Route index element={<FulGach />} />
          <Route path="দেশি-ফুল-গাছ" element={<DeshiFulGach />} />
          <Route path="বিদেশি-ফুল-গাছ" element={<BideshiFulGach />} />
          <Route path="বারমাসি-ফুল-গাছ" element={<BaromashiFulGach />} />
          <Route path="সুগন্ধি-ফুল-গাছ" element={<SugondhiFulGach />} />
          <Route path="লতা-জাতীয়-ফুল-গাছ" element={<LataJatiyoFulGach />} />
        </Route>
        <Route path="product-category/শোভাময়-গাছ" element={<ProductCategoryOutlet />}>
          <Route index element={<ShovamoyGach />} />
          <Route path="ইনডোর-প্লান্টস" element={<IndoorPlants />} />
          <Route path="আউটডোর-প্লান্টস" element={<IndoorPlants />} />
          <Route path="হ্যাঙ্গিং-প্লান্টস" element={<HangingPlants />} />
          <Route path="ক্যাকটাস-ও-স্যাকুলেন্ট" element={<KaktasPlants />} />
          <Route path="বনসাই" element={<BonShai />} />
        </Route>
        <Route path="product-category/শোভাময়-গাছ" element={<ProductCategoryOutlet />}>
          <Route index element={<ShovamoyGach />} />
          <Route path="ইনডোর-প্লান্টস" element={<IndoorPlants />} />
          <Route path="আউটডোর-প্লান্টস" element={<IndoorPlants />} />
          <Route path="হ্যাঙ্গিং-প্লান্টস" element={<HangingPlants />} />
          <Route path="ক্যাকটাস-ও-স্যাকুলেন্ট" element={<KaktasPlants />} />
          <Route path="বনসাই" element={<BonShai />} />
        </Route>
        <Route path="product-category/ঔষধি-গাছ" element={<OushodhiGach />} />
        <Route path="product-category/মশলা-জাতীয়-গাছ" element={<MoslaJatioGach />} />
        <Route path="product-category/সবজি-জাতীয়-গাছ" element={<ShobjiJatioGach />} />
        <Route path="product-category/গার্ডেনিং-প্যাকেজ" element={<GardeningPackege />} />
        {/* bagan anushongik route */}
        <Route path="product-category/টব-জিও-ব্যাগ" element={<TobOjioBag />} />
        <Route path="product-category/জৈব-সার-ও-কীটনাশক" element={<JoiboSharOKitnasok />} />
        <Route path="product-category/চুনা-পাথর" element={<CunaPathor />} />
        {/* other route */}
        <Route path="product-category/গার্ডেনিং-টুলস" element={<GardeningTools />} />

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
