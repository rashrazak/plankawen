import React from 'react'

function SelectState() {
    return (
        <div className="form-width">
            <label>Pilihan negeri</label>
            <select className="form-control form-control-select-state">
                <option value="Johor">Johor</option>
                <option value="Kedah">Kedah</option>
                <option value="Kelantan">Kelantan</option>
                <option value="Kuala Lumpur">Kuala Lumpur</option>
                <option value="Labuan">Labuan</option>
                <option value="Malacca">Malacca</option>
                <option value="Negeri Sembilan">Negeri Sembilan</option>
                <option value="Pahang">Pahang</option>
                <option value="Perak">Perak</option>
                <option value="Perlis">Perlis</option>
                <option value="Penang">Penang</option>
                <option value="Sabah">Sabah</option>
                <option value="Sarawak">Sarawak</option>
                <option value="Selangor">Selangor</option>
                <option value="Terengganu">Terengganu</option>
            </select>
        <style jsx>{`
            .form-width { max-width: 490px; margin-bottom: 10px;}
            label { font-style: normal;font-weight: normal;font-size: 0.875rem;color: #75848E;}
            .form-control-select-state { box-shadow: none;-webkit-appearance: none;background-image: url('/images/icon/chevron-down.png');background-repeat: no-repeat;background-position: center right 10px;background-color: #FFF;border: 1px solid #EAEAEA;border-radius: 4px; height: 50px !Important;}
        `}</style>
        </div>
    )
}

export default SelectState
