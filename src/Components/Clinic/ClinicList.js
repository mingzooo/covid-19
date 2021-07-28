import React from 'react';
import ClinicPoint from './ClinicPoint';
import './Style/ClinicList.css';

function ClinicList({
  handleSearch,
  importClinicData,
  search,
  clinicData,
  isLoading,
  handleLatLng,
}) {
  return (
    <>
      <div className="clinic_list_body">
        <div className="clinic_header">
          <h1>선별 진료소 찾기</h1>

          <div className="clinic_search_box">
            <input
              className="clinic_input"
              type="text"
              onChange={(e) => handleSearch(e.target.value)}
              placeholder="검색어를 입력하세요."
            />
            <button onClick={() => importClinicData(search)}>
              <img
                src="https://cdn1.iconfinder.com/data/icons/mixed-17/16/Icon_search-256.png"
                alt="finder"
              />
            </button>
          </div>
        </div>
        {isLoading ? (
          typeof clinicData === 'string' ? (
            <div className="clinic_list_first">
              <div>동네 이름으로 검색이 가능합니다.</div>
              <div>바로 검색버튼을 누를 시 전체 목록이 나옵니다.</div>
            </div>
          ) : (
            <div className="clinic_list_loading">Loading...</div>
          )
        ) : (
          <>
            {clinicData.map((item, id) => {
              return (
                <div key={id}>
                  <ClinicPoint item={item} handleLatLng={handleLatLng} />
                </div>
              );
            })}
          </>
        )}
      </div>
    </>
  );
}

export default ClinicList;
