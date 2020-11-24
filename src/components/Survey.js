import React from "react"
import Title from "./Title"
import styled from "styled-components"
import base from "./Airtable"
import { FaVoteYea } from "react-icons/fa"

// fetching stuff

const Survey = () => {
  const [items, setItems] = React.useState([])
  const [loading, setLoading] = React.useState(true)

  const getRecords = async () => {
    const records = await base("Surveys")
      .select({})
      .firstPage()
      .catch(err => console.log(err))
    console.log(records)
    const newItems = records.map(record => {
      const { id, fields } = record
      return { id, fields }
    })
    setItems(newItems)
    setLoading(false)
  }
  // Voting
  const giveVote = async id => {
    setLoading(true)
    const tempItems = [...items].map(item => {
      if (item.id === id) {
        let { id, fields } = item
        fields = { ...fields, votes: fields.votes + 1 }
        return { id, fields }
      } else {
        return item
      }
    })
    // updating
    const records = await base("Surveys")
      .update(tempItems)
      .catch(err => console.log(err))
    const newItems = records.map(record => {
      const { id, fields } = record
      return { id, fields }
    })
    setItems(newItems)
    setLoading(false)
  }

  // useEffect
  React.useEffect(() => {
    getRecords()
  }, [])
  return (
    <div className="bg-rose-200 py-6">
      <Title title="Umfrage" />
      <section className="breite">
        <h1 className="text-center text-3xl">Dein Lieblingsmanga?</h1>
        {loading ? (
          <h1 className="text-center text-3xl mt-8">Loading...</h1>
        ) : (
          <article className="grid grid-cols-3 md:grid-cols-6 gap-4 mt-8">
            {items.map(item => {
              const {
                id,
                fields: { Name, votes },
              } = item
              return (
                <div
                  className="text-center text-rose-700 text-xl font-semibold"
                  key={id}
                >
                  <h1 className="capitalize">{Name}</h1>
                  <h1 className="">{votes} Stimmen</h1>
                  <button
                    className="text-center mt-4"
                    onClick={() => {
                      giveVote(id)
                    }}
                  >
                    <FaVoteYea />
                  </button>
                </div>
              )
            })}
          </article>
        )}
      </section>
    </div>
  )
}

export default Survey
