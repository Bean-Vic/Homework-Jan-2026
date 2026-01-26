import React from "react";

export default function getLocalStorageCache(BaseComponent, storageKey){
    return class LocalStorageCache extends React.Component {
        constructor(props) {  
            super(props);

            const cached= localStorage.getItem(storageKey);
            const initialValue = cached ? Number(cached) : Number(props.initialValue ?? 0);
            this.state = {cachedValue : initialValue};
        }

        render() {
            return (
                <>
                    <BaseComponent {...this.props}
                        initialValue={this.state.cachedValue}
                        onValueChange={(newValue) => {
                            localStorage.setItem(storageKey, newValue);}}>
                    </BaseComponent>
                </>
            )
        }
    }

}
