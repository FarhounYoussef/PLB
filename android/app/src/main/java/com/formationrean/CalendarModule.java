package com.formationrean;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Promise;
import java.util.Map;
import java.util.HashMap;
import android.util.Log;

public class CalendarModule extends ReactContextBaseJavaModule {
    CalendarModule(ReactApplicationContext context) {
        super(context);
    }

    @Override
    public String getName() {
        return "CalendarModule";
    }

    @ReactMethod
    public void createCalendarEvent(String name, String location, Promise promise) {
        try {
            Log.d("CalendarModule", "Create event called with name: " + name
                    + " and location: " + location);
            Integer eventId = 1234;
            promise.resolve(eventId);
        } catch(Exception e) {
            promise.reject("Create Event Error", e);
        }
    }
}