import settings from '../../../settings.json';
import { Settings } from '@/const/types/Settings';
export default function useSettings() {

    /**
     * Get setting value
     * @param settingName string - setting name to get
     *
     * @returns string - setting value
     */
    const getSetting = (settingName: keyof Settings): string => {
        return settings[settingName];
    }

    /**
     * Update specific setting value
     * @param settingName string - setting name to get
     * @param newValue string - new setting value
     */

    return{
        actions:{
            getSetting,
        }
    }
}
