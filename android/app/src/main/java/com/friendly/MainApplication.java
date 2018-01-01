package com.friendly;

import android.app.Application;
import android.support.annotation.Nullable;

import com.facebook.react.ReactApplication;

import com.cmcewen.blurview.BlurViewPackage;
import com.airbnb.android.react.maps.MapsPackage;
import com.oblador.vectoricons.VectorIconsPackage;

import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;
import com.reactnativenavigation.NavigationApplication;
import com.facebook.CallbackManager;
import com.facebook.appevents.AppEventsLogger;
import java.util.Arrays;
import java.util.List;

import com.facebook.FacebookSdk;
import com.facebook.reactnative.androidsdk.FBSDKPackage;

public class MainApplication extends NavigationApplication implements ReactApplication {
    private static CallbackManager mCallbackManager = CallbackManager.Factory.create();

    protected static CallbackManager getCallbackManager() {
        return mCallbackManager;
    }

    private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
        @Override
        public boolean getUseDeveloperSupport() {
            return BuildConfig.DEBUG;
        }

        @Override
        protected List<ReactPackage> getPackages() {
            return Arrays.<ReactPackage>asList(
                    new MainReactPackage(),
                    new FBSDKPackage(mCallbackManager),
                    new VectorIconsPackage(),
                    new MapsPackage(),
                    new BlurViewPackage()
            );
        }
    };

    @Override
    public void onCreate() {
        super.onCreate();
        FacebookSdk.sdkInitialize(getApplicationContext());
        // If you want to use AppEventsLogger to log events.
        AppEventsLogger.activateApp(this);
    }
    //yukarıdaki çalışmazsa aşağıdakini dene bir de
  //  @Override
  //  public void onCreate() {
   //     super.onCreate();
   //     setActivityCallbacks(new ActivityCallbacks() {
    //        @Override
   //         public void onActivityResult(int requestCode, int resultCode, Intent data) {
   //             mCallbackManager.onActivityResult(requestCode, resultCode, data);
   //         }
  //      });
  //      FacebookSdk.sdkInitialize(getApplicationContext());
  //      SoLoader.init(this, /* native exopackage */ false);
  //  }

    @Override
    public boolean isDebug() {
        return false;
    }

    @Nullable
    @Override
    public List<ReactPackage> createAdditionalReactPackages() {
        return null;
    }
}