import {useContext, useEffect, useState} from 'react'
import {MenuComponent} from '../../../../../../../_metronic/assets/ts/components'
import {initialQueryState} from '../../../../../../../_metronic/helpers'
import {useQueryRequest} from '../../core/QueryRequestProvider'
import {getusersbycountry} from '../../../../../../../_metronic/partials/widgets/dashboard/core/_requests'
import { CountryContext } from '../../../../../../../Context'

type CountryData = {
  users_count: number,
  country: string
}

const UsersListFilter = () => {
  const {updateState} = useQueryRequest()
  const [countryData, setCountryData] = useState<Array<CountryData>>()
  // const [country, setCountry] = useState<string>('All country')
  const [filterData, setFilterData] = useState<string>('All Country')
  const {country, setCountry} = useContext(CountryContext)

  // const resetData = () => {
  //   updateState({filter: undefined, ...initialQueryState})
  // }

  const filterFuc = (country:string) => {
    updateState({
      filter: {country},
      ...initialQueryState,
    })
  }

  useEffect(() => {
    filterFuc(filterData)
  }, [filterData])

  useEffect(() => {
    setFilterData(country)
  }, [country])

  useEffect(() => {
    MenuComponent.reinitialization()
  }, [])

  useEffect(() =>{
    const fetchData = async () => {
      const {data: res} = await getusersbycountry();
      setCountryData(res.data);
      // setTotalUsers(res.totalCount);

      setTimeout(() => {
        fetchData()
          .catch(console.error);
      }, 7200000)
    }
    fetchData()
      .catch(console.error);
  }, [])

  return (
    <>
      <select
        className='btn btn-light-primary me-3'
        data-kt-select2='true'
        data-placeholder='Select option'
        data-allow-clear='true'
        data-kt-user-table-filter='role'
        data-hide-search='true'
        onChange={(e) =>
          {
            setFilterData(e.target.value)
            setCountry('')
          }
        }
        value={filterData}
      >
        <option value=''>All Country</option>
        {
          countryData?.map((eData, index) => {
            return(
              <option value={eData.country} key={index}>{eData.country}</option>
            )
          })
        }
      </select>
    </>
  )
}

export {UsersListFilter}
