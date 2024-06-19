import {
  View,
  Text,
  Pressable,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS } from "../constants";
import Button from "../components/Button";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { HOSTNAME } from "../utils/Constants/SystemVar";
import { useDispatch } from "react-redux";
import { _fetchLogin } from "../services/callAPI";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getDataStore } from "../utils/funtions";

const Login = ({ navigation }) => {
  const dispatch = useDispatch();
  const [message, setMessage] = useState("");
  const [isPasswordShown, setIsPasswordShown] = useState(true);
  const [isChecked, setIsChecked] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [color, setColor] = useState("green");
  // const onLogin = () => {
  //   if (username == "" || password == "") {
  //     setMessage("Vui lòng nhập đẩy đủ tài khoản và mật khẩu!");
  //     setColor("red");
  //   } else {
  //     setMessage("Đang kiểm tra thông tin...");
  //     setColor("green");
  //     if (username == "0332093438" && password == "nguin00") {
  //       navigation.navigate("Main");
  //     } else {
  //       setMessage("Sai tài khoản hoặc mật khẩu!");
  //       setColor("red");
  //     }
  //   }
  // };

  useEffect(() => {
    const user = getDataStore('logininfo');
    console.log('user', user)
  }, [])

  const onLogin = async () => {
    // console.log('values', values);
    // setisShowbtnLogin(true);
    const postData = {
      username : username,
      password : password
    }
    const response = await dispatch(_fetchLogin(HOSTNAME, 'api/authen/login', postData));
    console.log(response)
    if (!response.iserror) {
      navigation.navigate("Main");
    }
    else {
        setMessage(response.message);
        setColor("red");
        return;
    }
};


  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white, }}>
      <View style={{ flex: 1, marginHorizontal: 22 }}>
        <View style={{ marginVertical: 22 }}>
          <Text
            style={{
              fontSize: 22,
              fontWeight: "bold",
              marginVertical: 12,
              color: COLORS.black,
            }}
          >
            Chào mừng bạn trở lại ! 👋
          </Text>

          <Text
            style={{
              fontSize: 16,
              color: message == "" ? COLORS.black : color,
            }}
          >
            {message != "" ? message : "Vui lòng nhập tài khoản và mật khẩu!"}
          </Text>
        </View>

        <View style={{ marginBottom: 12 }}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: 400,
              marginVertical: 8,
            }}
          >
            Tài khoản
          </Text>

          <View
            style={{
              width: "100%",
              height: 48,
              borderColor: COLORS.black,
              borderWidth: 1,
              borderRadius: 8,
              alignItems: "center",
              justifyContent: "center",
              paddingLeft: 22,
            }}
          >
            <TextInput
              placeholder="Nhập tài khoản..."
              placeholderTextColor={COLORS.black}
              onChangeText={(text) => setUsername(text)}
              style={{
                width: "100%",
              }}
            />
          </View>
        </View>

        <View style={{ marginBottom: 12 }}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: 400,
              marginVertical: 8,
            }}
          >
            Mật khẩu
          </Text>

          <View
            style={{
              width: "100%",
              height: 48,
              borderColor: COLORS.black,
              borderWidth: 1,
              borderRadius: 8,
              alignItems: "center",
              justifyContent: "center",
              paddingLeft: 22,
            }}
          >
            <TextInput
              placeholder="Nhập mật khẩu..."
              placeholderTextColor={COLORS.black}
              secureTextEntry={isPasswordShown}
              onChangeText={(text) => setPassword(text)}
              style={{
                width: "100%",
              }}
            />

            <TouchableOpacity
              onPress={() => setIsPasswordShown(!isPasswordShown)}
              style={{
                position: "absolute",
                right: 12,
              }}
            >
              {isPasswordShown == true ? (
                <Ionicons name="eye-off" size={24} color={COLORS.black} />
              ) : (
                <Ionicons name="eye" size={24} color={COLORS.black} />
              )}

            </TouchableOpacity>
          </View>
        </View>
        <Button
          title="Đăng nhập"
          style={{
            marginTop: 18,
            marginBottom: 4,
          }}
          onPress={onLogin}
          disabled={username == "" || password == "" ? true : false}
        />

        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginVertical: 22,
          }}
        >
          <Text style={{ fontSize: 16, color: COLORS.black }}>
            Bạn chưa có tài khoản ?{" "}
          </Text>
          <Pressable onPress={() => navigation.navigate("Signup")}>
            <Text
              style={{
                fontSize: 16,
                color: COLORS.primary,
                fontWeight: "bold",
                marginLeft: 6,
              }}
            >
              Đăng ký
            </Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;
