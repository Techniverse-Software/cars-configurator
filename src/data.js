export const colors = [
  { label: "Pearl White Multi-Coat", value: "white", price: 0 },
  { label: "Solid Black", value: "black", price: 1500 },
  // { label: "Midnight Silver Metallic", value: "silver", price: 1500 },
  { label: "Yellow sunflower", value: "yellow", price: 1500 },
  { label: "Red Multi-Coat", value: "red", price: 2500 },
];

export const interiorColors = [
  { label: "Mianta", value: "f1", price: 0 },
  { label: "Green", value: "f2", price: 0 },
  { label: "Yellow", value: "f3", price: 0 },
  { label: "Clouds", value: "f4", price: 0 },
  { label: "Red", value: "f5", price: 0 },
  { label: "Orange", value: "f6", price: 0 },
];

export const interiorColors2 = [
  { label: "Green", value: "l2", price: 0 },
  { label: "Yellow", value: "l3", price: 0 },
  { label: "Clouds", value: "l4", price: 0 },
];

export const interiorLayouts = [
  // { label: "Five seat interior", value: "five_seat", price: 0 },
  // { label: "Six seat interior", value: "six_seat", price: 6500 },
  // { label: "Seven seat interior", value: "seven_seat", price: 3500 },
];

export const mirror = [
  { label: "Red", value: "red", price: 2500 },
  { label: "Violet", value: "violet", price: 0 },
  { label: "Green", value: "green", price: 1500 },
  // { label: "Midnight Silver Metallic", value: "silver", price: 1500 },
  { label: "Yellow", value: "yellow", price: 1500 },
];

export const models = [
  {
    key: "s",
    name: "Ferrari 296 GTB",
    colors: colors,
    mirrorc: mirror,
    wheels: [
      {
        src: `${process.env.PUBLIC_URL}/wheels/model_s/model_s_wheel_1.png`,
        label: '19" Tempest Wheels',
        value: "wheel_1",
        price: 0,
      },
      {
        src: `${process.env.PUBLIC_URL}/wheels/model_s/model_s_wheel_2.png`,
        label: '21" Sonic Carbon Twin Turbine Wheels',
        value: "wheel_2",
        price: 4500,
      },
      {
        src: `${process.env.PUBLIC_URL}/wheels/model_s/model_s_wheel_3.png`,
        label: '21" Sonic Carbon Twin Turbine Wheels',
        value: "wheel_3",
        price: 4500,
      },
      {
        src: `${process.env.PUBLIC_URL}/wheels/model_s/model_s_wheel_4.png`,
        label: '21" Sonic Carbon Twin Turbine Wheels',
        value: "wheel_4",
        price: 4500,
      },
    ],
    mirrors: [
      {
        src: `${process.env.PUBLIC_URL}/wheels/model_s/model_s_wheel_1.png`,
        label: '19" Tempest Wheels',
        value: "wheel_1",
        price: 0,
      },
      {
        src: `${process.env.PUBLIC_URL}/wheels/model_s/model_s_wheel_2.png`,
        label: '21" Sonic Carbon Twin Turbine Wheels',
        value: "wheel_2",
        price: 4500,
      },
      {
        src: `${process.env.PUBLIC_URL}/wheels/model_s/model_s_wheel_3.png`,
        label: '21" Sonic Carbon Twin Turbine Wheels',
        value: "wheel_3",
        price: 4500,
      },
      {
        src: `${process.env.PUBLIC_URL}/wheels/model_s/model_s_wheel_4.png`,
        label: '21" Sonic Carbon Twin Turbine Wheels',
        value: "wheel_4",
        price: 4500,
      },
    ],
    types: [
      {
        label: "Long Range Plus",
        value: "long_range_plus",
        specs: {
          range: 402,
          top_speed: 155,
          acceleration_time: 3.7,
        },
        price: 69420,
      },
      {
        label: "Performance",
        value: "performance",
        specs: {
          range: 387,
          top_speed: 163,
          acceleration_time: 2.3,
        },
        price: 91990,
        benefits: [
          "Quicker acceleration: 0-60 mph in 2.3s",
          "Ludicrous Mode",
          "Enhanced Interior Styling",
          "Carbon fiber spoiler",
        ],
      },
      {
        label: "Plaid",
        value: "plaid",
        specs: {
          range: 520,
          top_speed: 200,
          acceleration_time: 2.0,
        },
        price: 139990,
        benefits: [
          "Quickest 0-60 mph and quarter mile acceleration of any production car ever",
          "Acceleration from 0-60 mph: <2.0s",
          "Quarter mile: <9.0s",
          "1,100+ horsepower",
          "Tri Motor All-Wheel Drive",
        ],
      },
    ],
    interiorColors: interiorColors,
  },
  {
    key: "x",
    name: "Lamborghini Urus",
    colors: colors,
    mirrorc: mirror,
    wheels: [
      {
        src: `${process.env.PUBLIC_URL}/wheels/model_x/model_x_wheel_1.png`,
        label: '20" Silver Wheels',
        value: "wheel_1",
        price: 0,
      },
      {
        src: `${process.env.PUBLIC_URL}/wheels/model_x/model_x_wheel_2.png`,
        label: '22" Onyx Black Wheels',
        value: "wheel_2",
        price: 5500,
      },
      {
        src: `${process.env.PUBLIC_URL}/wheels/model_x/model_x_wheel_3.png`,
        label: '22" Onyx Black Wheels',
        value: "wheel_3",
        price: 5500,
      },
      {
        src: `${process.env.PUBLIC_URL}/wheels/model_x/model_x_wheel_4.png`,
        label: '22" Onyx Black Wheels',
        value: "wheel_4",
        price: 5500,
      },
    ],
    types: [
      {
        label: "Long Range Plus",
        value: "long_range_plus",
        specs: {
          range: 371,
          top_speed: 155,
          acceleration_time: 4.4,
        },
        price: 79900,
      },
      {
        label: "Performance",
        value: "performance",
        specs: {
          range: 341,
          top_speed: 163,
          acceleration_time: 2.6,
        },
        price: 99990,
        benefits: [
          "Quicker acceleration: 0-60 mph in 2.6s",
          "Ludicrous Mode",
          "Enhanced Interior Styling",
        ],
      },
    ],
    interiorColors: interiorColors2,
    interiorLayouts: interiorLayouts,
  },
  // {
  //   key: 'y',
  //   name: "Model Y",
  //   colors: colors,
  //   wheels: [
  //     {
  //       src: `${process.env.PUBLIC_URL}/wheels/model_y/model_y_wheel_1.png`,
  //       label: '19?????? Gemini Wheels',
  //       value: "wheel_1",
  //       price: 0
  //     },
  //     {
  //       src: `${process.env.PUBLIC_URL}/wheels/model_y/model_y_wheel_2.png`,
  //       label: '20?????? Induction Wheels',
  //       value: "wheel_2",
  //       price: 2000
  //     }
  //   ],
  //   types: [
  //     {
  //       label: "Long Range",
  //       value: "long_range",
  //       specs: {
  //         range: 326,
  //         top_speed: 135,
  //         acceleration_time: 4.8
  //       },
  //       price: 45690
  //     },
  //     {
  //       label: "Performance",
  //       value: "performance",
  //       specs: {
  //         range: 303,
  //         top_speed: 155,
  //         acceleration_time: 3.5
  //       },
  //       price: 55690,
  //       benefits: [
  //         "Increased top speed from 135mph to 155mph",
  //         "21?????? ??berturbine Wheels",
  //         "Performance Brakes",
  //         "Lowered suspension",
  //         "Aluminum alloy pedals"
  //       ]
  //     }
  //   ],
  //   interiorColors: interiorColors.slice(0,2),
  //   interiorLayouts: [interiorLayouts[0], interiorLayouts[2]]
  // }
];

export const initialConfig = {
  s: {
    car_type: "long_range_plus",
    model: "s",
    color: "white",
    mirror: "red",
    wheels: "wheel_1",
    interior_color: "f1",
  },
  x: {
    car_type: "long_range_plus",
    model: "x",
    color: "white",
    wheels: "wheel_1",
    mirror: "red",
    interior_color: "l2",
    interior_layout: "five_seat",
  }
  // ,
  // y: {
  //   car_type: "long_range",
  //   model: "y",
  //   color: "white",
  //   wheels: "wheel_1",
  //   interior_color: "all_black",
  //   interior_layout: "five_seat",
  // },
};
