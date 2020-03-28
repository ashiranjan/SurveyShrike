using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using SurveyTest.Models;

namespace SurveyTest.Controllers
{
    public class SurveyController : ApiController
    {
        private DBModel db = new DBModel();

        // GET: api/Survey
        public IQueryable<Survey> GetSurveys()
        {
            return db.Surveys;
        }

        // GET: api/Survey/5
        [ResponseType(typeof(Survey))]
        public IHttpActionResult GetSurvey(Guid id)
        {
            Survey survey = db.Surveys.Find(id);
            if (survey == null)
            {
                return NotFound();
            }

            return Ok(survey);
        }

        // PUT: api/Survey/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutSurvey(Guid id, Survey survey)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != survey.Id)
            {
                return BadRequest();
            }

            db.Entry(survey).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!SurveyExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/Survey
        [ResponseType(typeof(Survey))]
        public IHttpActionResult PostSurvey(Survey survey)
        {
            survey.Id = survey.Id == Guid.Empty ? Guid.NewGuid() : survey.Id;
            survey.IsPublish = true;
            survey.CreatedOn = DateTime.Now;

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Surveys.Add(survey);

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateException)
            {
                if (SurveyExists(survey.Id))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("DefaultApi", new { id = survey.Id }, survey);
        }

        // DELETE: api/Survey/5
        [ResponseType(typeof(Survey))]
        public IHttpActionResult DeleteSurvey(Guid id)
        {
            Survey survey = db.Surveys.Find(id);
            if (survey == null)
            {
                return NotFound();
            }

            db.Surveys.Remove(survey);
            db.SaveChanges();

            return Ok(survey);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool SurveyExists(Guid id)
        {
            return db.Surveys.Count(e => e.Id == id) > 0;
        }
    }
}