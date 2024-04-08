// import React, { useEffect, useState } from 'react';
// import {
//   StyleSheet,
//   Text,
//   View,
//   Button,
//   FlatList,
//   TouchableOpacity,
// } from 'react-native';
// import {
//   PosPrinter,
//   PrinterConstants,
//   printerCommand,
// } from 'react-native-pos-printer';
// import RNFetchBlob from 'rn-fetch-blob';

// const receipt = {
//   logoURL:
//     'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Photopea_logo.svg/250px-Photopea_logo.svg.png',
//   TIN: '000000000000',
//   addressLine1: '00 หมู่ 0 ต.ตำบล อ.อำเภอ',
//   addressLine2: 'จ.จังหวัด 50000',
//   receiptNo: '000066010000',
//   customerName: 'ชื่อจริง นามสกุลจัง',
//   contractNo: '66000000000',
//   receiptDate: '09/06/2566',
//   receiptTime: '00:00',
//   receiptAmount: '15,000',
//   collectorName: 'พิชิด เดชซ้อน',
//   barcode() {
//     return `${receipt.receiptNo}\r\n${receipt.contractNo}\r\n${receipt.receiptAmount}`;
//   },
// };

// const App = () => {
//   const [devices, setDevices] = useState([]);

//   const getDevices = () => {
//     console.log('getDevices');

//     PosPrinter.getDevices()
//       .then((device) => setDevices(device))
//       .catch((err) => console.log(err));
//   };

//   const connectDevice = (device) => {
//     console.log('connectDevice');

//     PosPrinter.connectDevice(device.identifier)
//       .then((res) => console.log(res))
//       .catch((err) => console.log(err));
//   };

//   const printTestReceipt = async () => {
//     console.log('printTestReceipt');

//     const cmd = [
//       printerCommand.setPrinter(PrinterConstants.Command.CODE_PAGE, 26),
//     ];

//     const logo = await RNFetchBlob.config({
//       path: `${RNFetchBlob.fs.dirs.DownloadDir}/250px-Photopea_logo.svg.png`,
//     }).fetch('GET', receipt.logoURL);
//     cmd.push(printerCommand.printImageFromStorage(logo.path()));

//     cmd.push(
//       printerCommand.setPrinter(
//         PrinterConstants.Command.ALIGN,
//         PrinterConstants.Command.ALIGN_CENTER
//       ),
//       printerCommand.setPrinter(PrinterConstants.Command.FONT_MODE, 1),
//       printerCommand.printLine(`เลขที่ประจําตัวผู้เสียภาษี: ${receipt.TIN}`),
//       printerCommand.printLine(receipt.addressLine1),
//       printerCommand.printLine(receipt.addressLine2),
//       printerCommand.printSeparator30('-------'),
//       printerCommand.printLine('')
//     );

//     cmd.push(
//       printerCommand.setPrinter(
//         PrinterConstants.Command.ALIGN,
//         PrinterConstants.Command.ALIGN_LEFT
//       ),
//       printerCommand.setPrinter(PrinterConstants.Command.FONT_MODE, 0),
//       printerCommand.printLine(`เลขที่ใบเสร็จรับเงิน: ${receipt.receiptNo}`),
//       printerCommand.printLine(`ชื่อลูกค้า: ${receipt.customerName}`),
//       printerCommand.printLine(`เลขที่สัญญา: ${receipt.contractNo}`),
//       printerCommand.printLine(`วันที่ชำระเงิน: ${receipt.receiptDate}`),
//       printerCommand.printLine(`เวลา: ${receipt.receiptTime}`),
//       printerCommand.printLine(`จำนวนเงินที่ชำระ: ${receipt.receiptAmount}`),
//       printerCommand.printLine(`ชำระโดย: เงินสด`),
//       printerCommand.printLine(`ผู้รับเงิน: ${receipt.collectorName}`),
//       printerCommand.setPrinter(PrinterConstants.Command.FONT_MODE, 1),
//       printerCommand.printLine(''),
//       printerCommand.setPrinter(
//         PrinterConstants.Command.ALIGN,
//         PrinterConstants.Command.ALIGN_CENTER
//       ),
//       printerCommand.printSeparator30('-------'),
//       printerCommand.printLine('')
//     );

//     cmd.push(
//       printerCommand.setPrinter(
//         PrinterConstants.Command.ALIGN,
//         PrinterConstants.Command.ALIGN_CENTER
//       ),
//       printerCommand.setPrinter(PrinterConstants.Command.FONT_MODE, 1),
//       printerCommand.printLine('โปรดตรวจสอบรายการชำระเงินของท่าน'),
//       printerCommand.printLine(''),
//       printerCommand.printBarCode(
//         PrinterConstants.BarcodeType.CODE128,
//         10,
//         10,
//         10,
//         receipt.barcode()
//       ),
//       printerCommand.printLine(''),
//       printerCommand.printLine('')
//     );

//     try {
//       await PosPrinter.printerModule.addCommands(cmd);
//       if (this.deviceEventEmitter) this.deviceEventEmitter.remove();
//       console.log('Done');
//     } catch (e) {
//       console.log(e);
//     }
//   };

//   useEffect(() => {
//     console.log(PosPrinter);

//     PosPrinter.init()
//       .then((res) => console.log(res))
//       .catch((err) => console.log(err));
//   });

//   return (
//     <View style={styles.container}>
//       <View style={styles.box}>
//         <Text>Devices:</Text>
//         <FlatList
//           data={devices}
//           keyExtractor={(device) => device.identifier}
//           renderItem={({ item }) => {
//             return (
//               <TouchableOpacity onPress={() => connectDevice(item)}>
//                 <View>
//                   <Text>Identifier: {item.identifier}</Text>
//                   <Text>Name: {item.name}</Text>
//                 </View>
//               </TouchableOpacity>
//             );
//           }}
//         />
//         <Button title="Get Devices" onPress={() => getDevices()} />
//       </View>
//       <View style={styles.box}>
//         <Button title="Print Test Receipt" onPress={() => printTestReceipt()} />
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   box: {
//     margin: 10,
//   },
// });

// export default App;


















import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  Button,
  TextInput,
  PermissionsAndroid,
} from "react-native";
import { Picker } from "@react-native-picker/picker"; // Import Picker from @react-native-picker/picker

import {
  BLEPrinter,
  NetPrinter,
  USBPrinter,
} from "react-native-thermal-receipt-printer";

const printerList = {
  ble: BLEPrinter,
  net: NetPrinter,
  usb: USBPrinter,
};

export default function App() {
  const [selectedValue, setSelectedValue] = useState("ble");
  const [devices, setDevices] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedPrinter, setSelectedPrinter] = useState({});

  useEffect(() => {
    const getListDevices = async () => {
      const Printer = printerList[selectedValue];
      if (selectedValue === "net") return;
      try {
        setLoading(true);
        await Printer.init();
        const results = await Printer.getDeviceList();
        setDevices(
          results.map((item) => ({ ...item, printerType: selectedValue }))
        );
      } catch (err) {
        console.warn(err);
      } finally {
        setLoading(false);
      }
    };
    getListDevices();
  }, [selectedValue]);

  useEffect(() => {
    const requestBluetoothPermission = async () => {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.BLUETOOTH_CONNECT,
          {
            title: 'Bluetooth Permission',
            message:
              'This app needs access to Bluetooth in order to connect to printers.',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          console.log('Bluetooth permission granted');
        } else {
          console.log('Bluetooth permission denied');
        }
      } catch (err) {
        console.warn(err);
      }
    };

    requestBluetoothPermission();
  }, []);

  const handleConnectSelectedPrinter = () => {
    if (!selectedPrinter) return;
    const connect = async () => {
      try {
        setLoading(true);
        switch (selectedPrinter.printerType) {
          case "ble":
            await BLEPrinter.connectPrinter(
              selectedPrinter.inner_mac_address || ""
            );
            break;
          case "net":
            await NetPrinter.connectPrinter("192.168.1.100", 9100);
            break;
          case "usb":
            await USBPrinter.connectPrinter(
              selectedPrinter.vendor_id || "",
              selectedPrinter.product_id || ""
            );
            break;
          default:
        }
      } catch (err) {
        console.warn(err);
      } finally {
        setLoading(false);
      }
    };
    connect();
  };

  const handlePrint = async () => {
    try {
      const Printer = printerList[selectedValue];
      await Printer.printImage(
        "https://howmuch-pk.s3.ap-southeast-1.amazonaws.com/spree/stores/1380/squared_large/logo-for-grocery-store-vector-21609822.jpeg",
        { imageWidth: 100, paddingX: 300 }
      );
      await Printer.printText(
        "<C>sample text bjhbfhjbdjhfbjfhdvfjdvhjdbfjbjhfdbghjfbgbhjfdgbjfdhbgbjhdfgbjhdfbghjdbghdbjgdhhbgghdjfhbgjdfbgbhjd</C>\n"
      );
    } catch (err) {
      console.warn(err);
    }
  };

  const handleChangePrinterType = (type) => {
    setSelectedValue((prev) => {
      printerList[prev].closeConn();
      return type;
    });
    setSelectedPrinter({});
  };

  const handleChangeHostAndPort = (params) => (text) =>
    setSelectedPrinter((prev) => ({
      ...prev,
      device_name: "Net Printer",
      [params]: text,
      printerType: "net",
    }));

  const _renderNet = () => (
    <View style={{ paddingVertical: 16 }}>
      <View style={styles.rowDirection}>
        <Text>Host: </Text>
        <TextInput
          placeholder="192.168.100.19"
          onChangeText={handleChangeHostAndPort("host")}
        />
      </View>
      <View style={styles.rowDirection}>
        <Text>Port: </Text>
        <TextInput
          placeholder="9100"
          onChangeText={handleChangeHostAndPort("port")}
        />
      </View>
    </View>
  );

  const _renderOther = () => (
    <Picker // Use Picker from @react-native-picker/picker
      selectedValue={selectedPrinter}
      onValueChange={(itemValue, itemIndex) =>
        setSelectedPrinter(itemValue)
      }
    >
      {devices.map((item, index) => (
        <Picker.Item
          label={item.device_name}
          value={item}
          key={`printer-item-${index}`}
        />
      ))}
    </Picker>
  );

  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <Text>Select printer type: </Text>
        <Picker
          selectedValue={selectedValue}
          onValueChange={handleChangePrinterType}
        >
          {Object.keys(printerList).map((item, index) => (
            <Picker.Item
              label={item.toUpperCase()}
              value={item}
              key={`printer-type-item-${index}`}
            />
          ))}
        </Picker>
      </View>
      <View style={styles.section}>
        <Text>Select printer: </Text>
        {selectedValue === "net" ? _renderNet() : _renderOther()}
      </View>
      <Button
        disabled={!selectedPrinter.device_name}
        title="Connect"
        onPress={handleConnectSelectedPrinter}
      />
      <Button
        disabled={!selectedPrinter.device_name}
        title="Print sample"
        onPress={handlePrint}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
  },
  section: {
    flex: 1,
  },
  rowDirection: {
    flexDirection: "row",
  },
});
