﻿using BrycesFirstASPNETWebApp.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BrycesFirstASPNETWebApp.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        [HttpGet("Grade")]
        public IActionResult Grade()
        {
            return View();
        }

        [HttpPost("Grade")]
        public IActionResult Grade(GradeModel model)
        {
            return View();
        }
    }
}
