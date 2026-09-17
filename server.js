const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const Product = require('./models/Product');
const Order = require('./models/Order');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Catalog without Festive Banarasi Brocade Saree
const dressCatalog = [
  // ==================== ETHNIC WEAR ====================
  {
    _id: "e1",
    title: "Embroidered Silk Anarkali Suit",
    category: "Ethnic Wear",
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&auto=format&fit=crop&q=80",
    price: 3199,
    originalPrice: 6499,
    rating: 4.7,
    discount: "50% off"
  },
  {
    _id: "e2",
    title: "Traditional Kanjeevaram Silk Saree",
    category: "Ethnic Wear",
    image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=600&auto=format&fit=crop&q=80",
    price: 2499,
    originalPrice: 4999,
    rating: 4.6,
    discount: "50% off"
  },
  {
    _id: "e3",
    title: "Floral Printed Cotton Kurta Set",
    category: "Ethnic Wear",
    image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=600&auto=format&fit=crop&q=80",
    price: 1299,
    originalPrice: 2599,
    rating: 4.4,
    discount: "50% off"
  },
  {
    _id: "e4",
    title: "Designer Chanderi Lehenga Choli",
    category: "Ethnic Wear",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&auto=format&fit=crop&q=80",
    price: 4599,
    originalPrice: 8999,
    rating: 4.8,
    discount: "48% off"
  },
  {
    _id: "e5",
    title: "Georgette Straight Fit Kurti",
    category: "Ethnic Wear",
    image: "https://images.unsplash.com/photo-1609357605129-26f69add5d6e?w=600&auto=format&fit=crop&q=80",
    price: 899,
    originalPrice: 1999,
    rating: 4.2,
    discount: "55% off"
  },
  {
    _id: "e6",
    title: "Bandhani Printed Silk Dupatta Suit",
    category: "Ethnic Wear",
    image: "https://images.unsplash.com/photo-1605289355680-75fb41239154?w=600&auto=format&fit=crop&q=80",
    price: 1899,
    originalPrice: 3799,
    rating: 4.5,
    discount: "50% off"
  },
  {
    _id: "e7",
    title: "Mirror Work Chikankari Kurta",
    category: "Ethnic Wear",
    image: "https://images.unsplash.com/photo-1563178406-4cdc2923acbc?w=600&auto=format&fit=crop&q=80",
    price: 1599,
    originalPrice: 3199,
    rating: 4.6,
    discount: "50% off"
  },
  {
    _id: "e9",
    title: "A-Line Rayon Kurta with Palazzo",
    category: "Ethnic Wear",
    image: "https://images.unsplash.com/photo-1572804013427-4d7ca7268217?w=600&auto=format&fit=crop&q=80",
    price: 1199,
    originalPrice: 2399,
    rating: 4.3,
    discount: "50% off"
  },

  // ==================== WESTERN DRESSES ====================
  {
    _id: "w1",
    title: "Floral Print Summer Maxi Dress",
    category: "Western Dresses",
    image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=600&auto=format&fit=crop&q=80",
    price: 1299,
    originalPrice: 2999,
    rating: 4.5,
    discount: "56% off"
  },
  {
    _id: "w2",
    title: "Elegant Red Evening Satin Gown",
    category: "Western Dresses",
    image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=600&auto=format&fit=crop&q=80",
    price: 2499,
    originalPrice: 4999,
    rating: 4.8,
    discount: "50% off"
  },
  {
    _id: "w3",
    title: "Casual Cotton A-Line Dress",
    category: "Western Dresses",
    image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=600&auto=format&fit=crop&q=80",
    price: 899,
    originalPrice: 1999,
    rating: 4.3,
    discount: "55% off"
  },
  {
    _id: "w4",
    title: "Classic Little Black Cocktail Dress",
    category: "Western Dresses",
    image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=600&auto=format&fit=crop&q=80",
    price: 1799,
    originalPrice: 3599,
    rating: 4.6,
    discount: "50% off"
  },
  {
    _id: "w5",
    title: "Boho Chic White Sundress",
    category: "Western Dresses",
    image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=600&auto=format&fit=crop&q=80",
    price: 1149,
    originalPrice: 2299,
    rating: 4.4,
    discount: "50% off"
  },
  {
    _id: "w6",
    title: "Polka Dot Midi Wrap Dress",
    category: "Western Dresses",
    image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=600&auto=format&fit=crop&q=80",
    price: 1399,
    originalPrice: 2799,
    rating: 4.5,
    discount: "50% off"
  },
  {
    _id: "w7",
    title: "Off-Shoulder Velvet Bodycon Dress",
    category: "Western Dresses",
    image: "https://images.unsplash.com/photo-1550639525-c97d455acf70?w=600&auto=format&fit=crop&q=80",
    price: 1999,
    originalPrice: 3999,
    rating: 4.7,
    discount: "50% off"
  },
  {
    _id: "w8",
    title: "Tiered Ruffled Chiffon Dress",
    category: "Western Dresses",
    image: "https://images.unsplash.com/photo-1502716119720-b23a93e5fe1b?w=600&auto=format&fit=crop&q=80",
    price: 1699,
    originalPrice: 3399,
    rating: 4.4,
    discount: "50% off"
  },
  {
    _id: "w9",
    title: "Denim Button-Down Shirt Dress",
    category: "Western Dresses",
    image: "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?w=600&auto=format&fit=crop&q=80",
    price: 1499,
    originalPrice: 2999,
    rating: 4.3,
    discount: "50% off"
  },

  // ==================== CASUAL TOPS ====================
  {
    _id: "t1",
    title: "Classic White Cotton T-Shirt",
    category: "Casual Tops",
    image: "https://images.unsplash.com/photo-1534126511673-b6899657816a?w=600&auto=format&fit=crop&q=80",
    price: 599,
    originalPrice: 1299,
    rating: 4.3,
    discount: "53% off"
  },
  {
    _id: "t2",
    title: "Ribbed Knit Puff Sleeve Top",
    category: "Casual Tops",
    image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=600&auto=format&fit=crop&q=80",
    price: 799,
    originalPrice: 1599,
    rating: 4.4,
    discount: "50% off"
  },
  {
    _id: "t3",
    title: "Floral Crop Top with Tie-Up",
    category: "Casual Tops",
    image: "https://images.unsplash.com/photo-1516257984-b1b4d707412e?w=600&auto=format&fit=crop&q=80",
    price: 699,
    originalPrice: 1399,
    rating: 4.2,
    discount: "50% off"
  },
  {
    _id: "t4",
    title: "Striped Loose Fit Linen Shirt",
    category: "Casual Tops",
    image: "https://images.unsplash.com/photo-1598554747436-c9293d6a588f?w=600&auto=format&fit=crop&q=80",
    price: 999,
    originalPrice: 1999,
    rating: 4.5,
    discount: "50% off"
  },
  {
    _id: "t5",
    title: "V-Neck Satin Formal Blouse",
    category: "Casual Tops",
    image: "https://images.unsplash.com/photo-1604014237800-1c9102c219da?w=600&auto=format&fit=crop&q=80",
    price: 899,
    originalPrice: 1799,
    rating: 4.6,
    discount: "50% off"
  },
  {
    _id: "t6",
    title: "Oversized Graphic Printed Tee",
    category: "Casual Tops",
    image: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=600&auto=format&fit=crop&q=80",
    price: 649,
    originalPrice: 1299,
    rating: 4.3,
    discount: "50% off"
  },
  {
    _id: "t7",
    title: "Lace Trim Black Tank Top",
    category: "Casual Tops",
    image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=600&auto=format&fit=crop&q=80",
    price: 499,
    originalPrice: 999,
    rating: 4.1,
    discount: "50% off"
  },
  {
    _id: "t8",
    title: "Denim Western Casual Jacket",
    category: "Casual Tops",
    image: "https://images.unsplash.com/photo-1544441893-675973e31985?w=600&auto=format&fit=crop&q=80",
    price: 1599,
    originalPrice: 3199,
    rating: 4.7,
    discount: "50% off"
  },
  {
    _id: "t9",
    title: "Peplum Off-Shoulder Top",
    category: "Casual Tops",
    image: "https://images.unsplash.com/photo-1564257631407-4deb1f99d992?w=600&auto=format&fit=crop&q=80",
    price: 849,
    originalPrice: 1699,
    rating: 4.4,
    discount: "50% off"
  },

  // ==================== FOOTWEAR ====================
  {
    _id: "f1",
    title: "Stylish Beige Block Heel Sandals",
    category: "Footwear",
    image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=600&auto=format&fit=crop&q=80",
    price: 1499,
    originalPrice: 2999,
    rating: 4.5,
    discount: "50% off"
  },
  {
    _id: "f2",
    title: "Handcrafted Ethnic Mojaris / Juttis",
    category: "Footwear",
    image: "https://images.unsplash.com/photo-1560343090-f0409e92791a?w=600&auto=format&fit=crop&q=80",
    price: 1199,
    originalPrice: 2399,
    rating: 4.6,
    discount: "50% off"
  },
  {
    _id: "f3",
    title: "Classic White Lifestyle Sneakers",
    category: "Footwear",
    image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=600&auto=format&fit=crop&q=80",
    price: 1899,
    originalPrice: 3799,
    rating: 4.7,
    discount: "50% off"
  },
  {
    _id: "f4",
    title: "Strappy Stiletto Party Heels",
    category: "Footwear",
    image: "https://images.unsplash.com/photo-1535043934128-cf0b28d52f95?w=600&auto=format&fit=crop&q=80",
    price: 1999,
    originalPrice: 3999,
    rating: 4.4,
    discount: "50% off"
  },
  {
    _id: "f5",
    title: "Casual Leather Slip-On Flats",
    category: "Footwear",
    image: "https://images.unsplash.com/photo-1562273138-f46be4ebdf33?w=600&auto=format&fit=crop&q=80",
    price: 899,
    originalPrice: 1799,
    rating: 4.3,
    discount: "50% off"
  },
  {
    _id: "f6",
    title: "Suede Ankle Length Boots",
    category: "Footwear",
    image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=600&auto=format&fit=crop&q=80",
    price: 2499,
    originalPrice: 4999,
    rating: 4.8,
    discount: "50% off"
  },
  {
    _id: "f7",
    title: "Braided Kolhapuri Chappals",
    category: "Footwear",
    image: "https://images.unsplash.com/photo-1603808033192-082d6919d3e1?w=600&auto=format&fit=crop&q=80",
    price: 799,
    originalPrice: 1599,
    rating: 4.5,
    discount: "50% off"
  },
  {
    _id: "f8",
    title: "Chunky Platform Canvas Shoes",
    category: "Footwear",
    image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=600&auto=format&fit=crop&q=80",
    price: 1599,
    originalPrice: 3199,
    rating: 4.6,
    discount: "50% off"
  },
  {
    _id: "f9",
    title: "Embellished Bridal Wedge Sandals",
    category: "Footwear",
    image: "https://images.unsplash.com/photo-1518049362265-d5b2a6467637?w=600&auto=format&fit=crop&q=80",
    price: 2199,
    originalPrice: 4399,
    rating: 4.7,
    discount: "50% off"
  }
];

const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/shopkart';
let isDbConnected = false;

mongoose.connect(MONGO_URI)
  .then(async () => {
    console.log('MongoDB Connected Successfully');
    isDbConnected = true;
    await seedInitialData();
  })
  .catch(() => {
    console.log('MongoDB offline. Running server in memory fallback mode.');
  });

async function seedInitialData() {
  if (isDbConnected) {
    try {
      await Product.deleteMany({});
      await Product.insertMany(dressCatalog);
      console.log('Database synced successfully without Festive Banarasi Saree.');
    } catch (err) {
      console.error('Seeding error:', err.message);
    }
  }
}

app.get('/api/products', async (req, res) => {
  try {
    const { category, minPrice, maxPrice } = req.query;
    let products = isDbConnected ? await Product.find() : dressCatalog;

    if (category) {
      products = products.filter(p => p.category.toLowerCase() === category.toLowerCase());
    }

    if (minPrice) {
      products = products.filter(p => p.price >= Number(minPrice));
    }

    if (maxPrice) {
      products = products.filter(p => p.price <= Number(maxPrice));
    }

    res.json(products);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch products" });
  }
});

app.post('/api/orders', async (req, res) => {
  try {
    const { customer, items, totalAmount } = req.body;
    if (isDbConnected) {
      const newOrder = new Order({ customer, items, totalAmount });
      await newOrder.save();
      return res.status(201).json({ success: true, orderId: newOrder._id });
    }
    res.status(201).json({ success: true, orderId: "ORD-" + Math.floor(Math.random() * 899999 + 100000) });
  } catch (err) {
    res.status(400).json({ error: "Failed to place order" });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`ShopKart live on http://localhost:${PORT}`));