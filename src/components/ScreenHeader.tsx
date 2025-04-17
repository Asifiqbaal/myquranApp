import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  StyleProp,
  ViewStyle,
  I18nManager,
} from "react-native";
// import { Theme } from "../theme";
import { useNavigation } from "@react-navigation/native";
import { Colors } from "react-native/Libraries/NewAppScreen";
//import CButton from "./CButton";
// import { AppConstants, removeAllDataFromCache, removeDataFromCachedWithKey } from "../modules";
import { Routes } from "../navigation/Routes";
import { StackParamList } from '../navigation/Router';
// import AlertModal from "./AlertModal";
import { Theme } from "../theme";

interface ICustomHeader {
  title: string;
  canGoBack?: boolean;
  isRightTitle?: boolean;
  titleStyle?: StyleProp<ViewStyle>
  totalPage?: Number | undefined;
  currentPage?: Number | undefined;
  showLogOut?: boolean;
  heading?: string;
  showCancel?: boolean;
  deepLinks?: boolean;
  onCancel?: () => void;
  showEdit?: boolean;
  onEdit?: () => void;
  isShowFilter?: boolean;
  handleFilter?: () =>  void;
}

const CustomHeader: React.FC<ICustomHeader> = (props) => {
  const { title, canGoBack, isRightTitle, titleStyle, totalPage, currentPage, showLogOut, heading, showCancel, onCancel, showEdit, onEdit, deepLinks, isShowFilter,handleFilter } = props;
  console.log('d????', deepLinks)
  const navigation = useNavigation<StackParamList>();
  const [visible, setVisible] = useState(false);

//   const onLogout = () => {
//     removeAllDataFromCache();
//     removeDataFromCachedWithKey(AppConstants.AsyncKeyLiterals.token);

//     navigation.reset({
//       index: 0,
//       routes: [
//         {
//             screen: 'Home',
//             params: {screen: 'HomeScreen'}, 
//         },
//       ],
//     });
//   }



  return (
    <>
      {/* <AlertModal
        isVisible={visible}
        modalType={'alert'}
        message={'Are you sure you want to cancel the creation?'}
        onYes={() => {
          setVisible(false);
          if (onCancel) onCancel();
        }}
        onNo={() => setVisible(false)}
        setIsVisible={setVisible}
      /> */}
      {showCancel || showEdit ? (

        <View style={[styles.container, { backgroundColor: showEdit ? "" : 'White', justifyContent: 'space-between' }]}>

          <View style={{ flexDirection: 'row', alignSelf: 'flex-end', }}>
            {canGoBack && (
              <>
                <TouchableOpacity style={styles.imageContainer} onPress={deepLinks ? () => navigation.reset({
                  index: 0,
                  routes: [{name: Routes.HomeScreen}],
                  }) : () => navigation.goBack()}>
                  <Image source={Theme.icons.icn_arrow_left} style={[styles.image, {transform: [{ rotateY: I18nManager.isRTL ? '180deg' : '0deg' }]}]} />
                </TouchableOpacity>
              </>
            )}

            {heading && (
               <View style={{ alignItems: 'center', alignSelf: 'center', marginTop: -5 }}>
              <Text style={[styles.headerTitle]}>{heading?.toUpperCase()}</Text>
              </View>
            )}
           {/* {isShowFilter && (
               <TouchableOpacity onPress={handleFilter} style={{ alignSelf: 'flex-end', marginTop: -25, justifyContent: 'center'  }}>
           <Image
                   source={Theme.icons.icn_filter}
                   style={{ height: 40, width: 40, borderRadius: 0, }}
                 />
                 </TouchableOpacity>
         )

         }    */}
              
          </View>

          {/* {showCancel && (
            <CButton
              title={'Cancel'}
              iconImage={<Image source={Theme.icons.icn_close_red} style={{ height: 16, width: 16, marginRight: 5 }} />}
              titleStyle={styles.cancelButtonText}
              containerStyle={styles.cancelButton}
              // onPress={onCancel}
              onPress={() => setVisible(true)}
            />
          )}
          {showEdit && (
            <CButton
              title={'Edit Pitch'}
              iconImage={<Image source={Theme.icons.icn_edit_white} style={{ height: 16, width: 16, marginRight: 5 }} />}
              titleStyle={styles.logoutButtonText}
              containerStyle={[styles.logoutButton, { height: 30 }]}
              onPress={onEdit}
            />
          )} */}
          {/* {isShowFilter && (

          )

          } */}
          
        </View>
      ) : (
        <View style={[styles.container, {backgroundColor: showLogOut || heading ? "" : Theme.colors.white, flexDirection: 'row', alignItems:'center' }]}>
          {canGoBack && (
            <>
              <TouchableOpacity style={styles.imageContainer} onPress={deepLinks ? 
              () => navigation.reset({
                index: 0,
                routes: [{name: Routes.HomeScreen}],
                })
                  : () => navigation.goBack()}>
                <Image source={Theme.icons.icn_arrow_left} style={[styles.image , {transform: [{ rotateY: I18nManager.isRTL ? '180deg' : '0deg' }]}]} />
              </TouchableOpacity>
            </>
          )}

          {heading && (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={styles.headerTitle}>{heading?.toUpperCase()}</Text>
            </View>
          )}
           {/* {isShowFilter && (
                <TouchableOpacity onPress={handleFilter}>

            <Image
                    source={Theme.icons.icn_filter}
                    style={{ height: 40, width: 40,marginRight:12 }}
                  />
                  </TouchableOpacity>
          )

          } */}
          {/* {showLogOut && (
            <>
              <CButton
                title={'Logout'}
                iconImage={<Image source={Theme.icons.icn_logout} style={{ height: 16, width: 16, marginRight: 5 }} />}
                titleStyle={styles.logoutButtonText}
                containerStyle={styles.logoutButton}
                onPress={onLogout}
              />
            </>
          )} */}

          {currentPage && totalPage && (
            <>
              <Text style={styles.pageNo}>{`${currentPage}/${totalPage}`}</Text>
            </>
          )}
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: "center",
    width: "100%",
    height: 60,
    zIndex: 10,
    paddingHorizontal: 5
  },
  imageContainer: {
    // position: 'absolute',
    backgroundColor: Theme.colors.black,
    borderRadius: Theme.sizes[100],
    justifyContent: 'center',
    height: 26,
    width: 26,
    marginLeft:5,
  },
  image: {
    width: 22,
    height: 22,
    alignSelf: 'center'
    //marginRight: 20
    //tintColor: Theme.colors.black
  },
  title: {
    fontSize: Theme.sizes[16],
    //fontFamily: Theme.fonts.SemiBold,
    color: Theme.colors.primary,
    marginRight: 10
    //textTransform: 'uppercase'
  },
  titleRight: {
    fontSize: Theme.sizes[14],
   // fontFamily: Theme.fonts.Regular,
    color: Theme.colors.black,
    position: 'absolute',
    right: 0,
  },
  pageNo: {
    color: Theme.colors.black,
    fontSize: 14,
  //  fontFamily: Theme.fonts.Regular,
    marginRight: 20
  },
  logoutButtonText: {
    fontSize: Theme.sizes[12],
  //  fontFamily: Theme.fonts.Bold,
    color: Theme.colors.white,
    marginRight: 2
  },
  logoutButton: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 35
  },

  cancelButtonText: {
    fontSize: Theme.sizes[12],
   // fontFamily: Theme.fonts.Bold,
    color: Theme.colors.errorTint,
    marginRight: 2
  },
  cancelButton: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Theme.colors.white,
    borderWidth: 1,
    borderColor: Theme.colors.errorTint,
    height: 30,
  },
  headerTitle: {
    //alignSelf: 'center',
    textAlign: 'center',
    //alignItems: 'center',
    fontSize: Theme.sizes[12],
   // fontFamily: Theme.fonts.SemiBold,
    color: Theme.colors.primary,
    marginRight: 20
    //marginRight: 150, 
    
  }
});

export default CustomHeader;