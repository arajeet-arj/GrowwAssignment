import './profilePhotos.css';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { PhotoListType } from '../../constants/types';
import { RootState } from '../../store/store';
import GridView from '../GridView';
import ListView from '../ListView';
import Loader from '../common/Loader';

const ProfilePhotos = () => {
  const { userPhotos, nextPhotosLoading }: { userPhotos: PhotoListType, nextPhotosLoading: boolean } = useSelector(
    (state: RootState) => state.user
  );

  const [display, setDisplay] = useState("grid");
  const setDisplayToGrid = () => {
    setDisplay("grid");
  };
  const setDisplayToList = () => {
    setDisplay("list");
  };

  return (
    <div className="pp01Container">
      <div className="pp01DisplayButtons">
        <div
          className={`pp01Button ${display === "list" ? "active" : ""}`}
          onClick={setDisplayToList}
        >
          <i className="fi-rr-apps-sort flaticon"></i>
        </div>
        <div
          className={`pp01Button ${display === "grid" ? "active" : ""}`}
          onClick={setDisplayToGrid}
        >
          <i className="fi-rr-apps flaticon"></i>
        </div>
      </div>
      <div>
        {userPhotos.length === 0 && !nextPhotosLoading ? (
          <div className="pp01NoPhotos">No photos to display.</div>
        ) : (
          <>
            {display === "grid" ? (
              <div>
                <GridView photos={userPhotos} />
              </div>
            ) : (
              <div className="pp01ListContainer">
                <ListView photos={userPhotos} user={true} />
              </div>
            )}
          </>
        )}
        {nextPhotosLoading && (
          <div className="pp01Loader">
            <Loader />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfilePhotos;
