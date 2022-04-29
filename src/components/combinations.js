const comboData = [
    {"Category":"ALL","Eggs":"80.6077638108354","Milk":"30.2551425191671","Salmon":"0","Chicken":"0","Beef":"34.5304450817404","Pork":"0.123310619789655","Split peas":"2.37469681793529","Black beans":"4.65765468381828","Lentils":"4.16692638068377","Pinto Beans":"7.9572877480551","Soybeans":"0","Bread, whole wheat":"1.30291391025125","Rice, brown":"97.089612207812","Oats, steel cut":"64.4079843815433","Quinoa":"49.6634986484412","Macaroni":"0.259412951107046","Almonds":"0","Peanuts":"0","Pecans":"0","Walnuts":"10.2429022263759","Broccoli":"29.2505098158402","Green pepper":"46.4136322407231","Green beans":"57.9348296816407","Carrots":"79.5078016727864","Squash, butternut":"80.5442419197227","Potato":"12.9652883766865","Sweet potato":"5.29400529421678","Romaine":"70.1588427368882","Kale":"73.1374081580946","Banana":"72.2851411008024","Mango":"95.6478454475819","Apple":"81.153261299776","Raspberries":"129.077795836713","Blueberries":"91.4339162511734","Mushrooms":"63.7860602765853"},
    {"Category":"ANIMAL","Eggs":"157.203211633194","Milk":"108.545011007835","Salmon":"0","Chicken":"0","Beef":"85.9414959751785","Pork":"0","Split peas":"0","Black beans":"0","Lentils":"0","Pinto Beans":"0","Soybeans":"0","Bread, whole wheat":"0","Rice, brown":"0","Oats, steel cut":"0","Quinoa":"0","Macaroni":"0","Almonds":"0","Peanuts":"0","Pecans":"0","Walnuts":"0","Broccoli":"0","Green pepper":"0","Green beans":"0","Carrots":"0","Squash, butternut":"0","Potato":"0","Sweet potato":"0","Romaine":"0","Kale":"0","Banana":"0","Mango":"0","Apple":"0","Raspberries":"0","Blueberries":"0","Mushrooms":"0"},
    {"Category":"MEAT","Eggs":"0","Milk":"0","Salmon":"0","Chicken":"0","Beef":"167.807710470102","Pork":"0","Split peas":"0","Black beans":"0","Lentils":"0","Pinto Beans":"0","Soybeans":"0","Bread, whole wheat":"0","Rice, brown":"0","Oats, steel cut":"0","Quinoa":"0","Macaroni":"0","Almonds":"0","Peanuts":"0","Pecans":"0","Walnuts":"0","Broccoli":"0","Green pepper":"0","Green beans":"0","Carrots":"0","Squash, butternut":"0","Potato":"0","Sweet potato":"0","Romaine":"0","Kale":"0","Banana":"0","Mango":"0","Apple":"0","Raspberries":"0","Blueberries":"0","Mushrooms":"0"},
    {"Category":"CHICKEN","Eggs":"0","Milk":"0","Salmon":"0","Chicken":"137.002797345603","Beef":"0","Pork":"0","Split peas":"0","Black beans":"0","Lentils":"0","Pinto Beans":"0","Soybeans":"0","Bread, whole wheat":"0","Rice, brown":"0","Oats, steel cut":"0","Quinoa":"0","Macaroni":"0","Almonds":"0","Peanuts":"0","Pecans":"0","Walnuts":"0","Broccoli":"0","Green pepper":"0","Green beans":"0","Carrots":"0","Squash, butternut":"0","Potato":"0","Sweet potato":"0","Romaine":"0","Kale":"0","Banana":"0","Mango":"0","Apple":"0","Raspberries":"0","Blueberries":"0","Mushrooms":"0"},
    {"Category":"MEAT_LEGUMES","Eggs":"138.67072709225","Milk":"33.0516690867193","Salmon":"0","Chicken":"0","Beef":"64.3005000575716","Pork":"0","Split peas":"0","Black beans":"0","Lentils":"0","Pinto Beans":"0","Soybeans":"63.1135191875792","Bread, whole wheat":"0","Rice, brown":"0","Oats, steel cut":"0","Quinoa":"0","Macaroni":"0","Almonds":"0","Peanuts":"0","Pecans":"0","Walnuts":"0","Broccoli":"0","Green pepper":"0","Green beans":"0","Carrots":"0","Squash, butternut":"0","Potato":"0","Sweet potato":"0","Romaine":"0","Kale":"0","Banana":"0","Mango":"0","Apple":"0","Raspberries":"0","Blueberries":"0","Mushrooms":"0"},
    {"Category":"LEGUMES","Eggs":"0","Milk":"0","Salmon":"0","Chicken":"0","Beef":"0","Pork":"0","Split peas":"0","Black beans":"79.4813730020845","Lentils":"0","Pinto Beans":"101.769638003113","Soybeans":"164.092979788844","Bread, whole wheat":"0","Rice, brown":"0","Oats, steel cut":"0","Quinoa":"0","Macaroni":"0","Almonds":"0","Peanuts":"0","Pecans":"0","Walnuts":"0","Broccoli":"0","Green pepper":"0","Green beans":"0","Carrots":"0","Squash, butternut":"0","Potato":"0","Sweet potato":"0","Romaine":"0","Kale":"0","Banana":"0","Mango":"0","Apple":"0","Raspberries":"0","Blueberries":"0","Mushrooms":"0"},
    {"Category":"LEGUMES_GRAIN_NUTS","Eggs":"0","Milk":"0","Salmon":"0","Chicken":"0","Beef":"0","Pork":"0","Split peas":"2.46045861685111","Black beans":"5.01757742178753","Lentils":"4.45013504717941","Pinto Beans":"9.06436243993358","Soybeans":"57.9029345407279","Bread, whole wheat":"0","Rice, brown":"277.830305265368","Oats, steel cut":"96.3438486321816","Quinoa":"411.497855806","Macaroni":"0","Almonds":"0","Peanuts":"0","Pecans":"0","Walnuts":"12.6387214126618","Broccoli":"0","Green pepper":"0","Green beans":"0","Carrots":"0","Squash, butternut":"0","Potato":"0","Sweet potato":"0","Romaine":"0","Kale":"0","Banana":"0","Mango":"0","Apple":"0","Raspberries":"0","Blueberries":"0","Mushrooms":"0"},
    {"Category":"NUTS_FRUITS_VEGGIES","Eggs":"0","Milk":"0","Salmon":"0","Chicken":"0","Beef":"0","Pork":"0","Split peas":"0","Black beans":"0","Lentils":"0","Pinto Beans":"0","Soybeans":"0","Bread, whole wheat":"0","Rice, brown":"0","Oats, steel cut":"0","Quinoa":"0","Macaroni":"0","Almonds":"0","Peanuts":"0","Pecans":"89.2332130929973","Walnuts":"0","Broccoli":"0","Green pepper":"0","Green beans":"41.5572795082371","Carrots":"19.3383808092922","Squash, butternut":"168.221607157242","Potato":"0","Sweet potato":"0","Romaine":"0","Kale":"364.048141626186","Banana":"0","Mango":"1238.55109272182","Apple":"0","Raspberries":"71.0624849095099","Blueberries":"696.519966251202","Mushrooms":"13.9220772399593"},
    {"Category":"FRUITS_VEGGIES","Eggs":"0","Milk":"0","Salmon":"0","Chicken":"0","Beef":"0","Pork":"0","Split peas":"0","Black beans":"0","Lentils":"0","Pinto Beans":"0","Soybeans":"0","Bread, whole wheat":"0","Rice, brown":"0","Oats, steel cut":"0","Quinoa":"0","Macaroni":"0","Almonds":"0","Peanuts":"0","Pecans":"0","Walnuts":"0","Broccoli":"133.180699380585","Green pepper":"0","Green beans":"0","Carrots":"31.1798829875172","Squash, butternut":"401.535035855296","Potato":"0","Sweet potato":"0","Romaine":"0","Kale":"400.124019238374","Banana":"0","Mango":"973.081738915982","Apple":"0","Raspberries":"100.801360368066","Blueberries":"1257.77725407319","Mushrooms":"0"}
]

export default comboData