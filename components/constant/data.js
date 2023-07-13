export const menuItems = [

  
    {
      id: 1,
      title: "Dashboard",
      isOpen: true,
      icon: "heroicons-outline:chart-bar",
      isHide: true,
      link: "/"
    },
    {
      id: 2,
      title: "Pesanan",
      icon: "heroicons-outline:shopping-cart",
      isHide: false,
      submenu: [
        {
          id: 21,
          title: "Pesanan Toko",
          link: "/order",
        },
        {
          id: 22,
          title: "Pesanan Distributor",
          link: "/distributor-order",
        }
      ]
    },
    {
      id: 3,
      title: "Surat Jalan",
      icon: "heroicons:truck",
      isHide: true,
      submenu: [
        {
          id: 31,
          title: "Surat Jalan Toko",
          link: "/delivery",
        },
        {
          id: 32,
          title: "Surat Jalan Distributor",
          link: "/distributor-delivery",
        }
      ]
    },
  
    {
      id: 4,
      title: "Pembayaran",
      icon: "heroicons:credit-card",
      isHide: true,
      submenu: [
        {
          id: 41,
          title: "Pembayaran Toko",
          link: "/settlement",
        },
        {
          id: 42,
          title: "Pembayaran Distributor",
          link: "/distributor-settlement",
        }
      ]
    },
  
    {
      id: 5,
      title: "Produk",
      icon: "heroicons-outline:shopping-bag",
      isHide: true,
      link: "/product",
    },
    {
      id: 6,
      title: "Toko",
      icon: "heroicons-outline:building-storefront",
      isHide: true,
      link: "/store",
    },
    {
      id: 7,
      title: "Distributor",
      icon: "heroicons-outline:building-office",
      isHide: true,
      link: "/distributor"
    },
    {
      id: 8,
      title: "Master Data",
      icon: "heroicons-outline:arrow-trending-up",
      isHide: true,
      link: "/master",
    },
  
    {
      id: 9,
      title: "Report",
      icon: "heroicons-outline:flag",
      isHide: true,
      link: "/report"
    },

  ];