import {
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
  AfterViewInit,
  ElementRef,
} from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
declare const $: any;
import { Router } from '@angular/router';
import { LoggerService } from '../../../core/services/application/logger.service';
@Component({
  selector: 'app-main-sidebar',
  templateUrl: './main-sidebar.component.html',
  styleUrls: ['./main-sidebar.component.css'],
})
export class MainSidebarComponent implements OnInit, AfterViewInit {
  searchForm: FormGroup;

  constructor(
    private elementRef: ElementRef,
    private formBuilder: FormBuilder,
    private router: Router,
    private log: LoggerService
  ) {}
  ngOnInit() {
    this.bindSearchFormGroup();
  }
  bindSearchFormGroup() {
    this.searchForm = this.formBuilder.group({
      search: ['', Validators.required],
    });
  }
  get f() {
    return this.searchForm.controls;
  }
  ngAfterViewInit(): void {
    this.initializeTree();
  }
  initializeTree() {
    'use strict';
    var DataKey = 'lte.tree';
    var Default = {
      animationSpeed: 500,
      accordion: true,
      followLink: false,
      trigger: '.treeview a',
    };
    var Selector = {
      tree: '.tree',
      treeview: '.treeview',
      treeviewMenu: '.treeview-menu',
      open: '.menu-open, .active',
      li: 'li',
      data: '[data-widget="tree"]',
      active: '.active',
    };
    var ClassName = {
      open: 'menu-open',
      tree: 'tree',
    };
    var Event = {
      collapsed: 'collapsed.tree',
      expanded: 'expanded.tree',
    };
    var Tree = function (element, options) {
      this.element = element;
      this.options = options;
      $(this.element).addClass(ClassName.tree);
      $(Selector.treeview + Selector.active, this.element).addClass(
        ClassName.open
      );
      this._setUpListeners();
    };
    Tree.prototype.toggle = function (link, event) {
      var treeviewMenu = link.next(Selector.treeviewMenu);
      var parentLi = link.parent();
      var isOpen = parentLi.hasClass(ClassName.open);
      if (!parentLi.is(Selector.treeview)) {
        return;
      }
      if (!this.options.followLink || link.attr('href') === '#') {
        event.preventDefault();
      }
      if (isOpen) {
        this.collapse(treeviewMenu, parentLi);
      } else {
        this.expand(treeviewMenu, parentLi);
      }
    };
    Tree.prototype.expand = function (tree, parent) {
      var expandedEvent = $.Event(Event.expanded);
      if (this.options.accordion) {
        var openMenuLi = parent.siblings(Selector.open);
        var openTree = openMenuLi.children(Selector.treeviewMenu);
        this.collapse(openTree, openMenuLi);
      }
      parent.addClass(ClassName.open);
      tree.slideDown(
        this.options.animationSpeed,
        function () {
          $(this.element).trigger(expandedEvent);
        }.bind(this)
      );
    };
    Tree.prototype.collapse = function (tree, parentLi) {
      var collapsedEvent = $.Event(Event.collapsed);
      parentLi.removeClass(ClassName.open);
      tree.slideUp(
        this.options.animationSpeed,
        function () {
          $(this.element).trigger(collapsedEvent);
        }.bind(this)
      );
    };
    Tree.prototype._setUpListeners = function () {
      var that = this;
      $(this.element).on('click', this.options.trigger, function (event) {
        that.toggle($(this), event);
      });
    };
    function Plugin(option) {
      return this.each(function () {
        var $this = $(this);
        var data = $this.data(DataKey);
        if (!data) {
          var options = $.extend(
            {},
            Default,
            $this.data(),
            typeof option == 'object' && option
          );
          $this.data(DataKey, new Tree($this, options));
        }
      });
    }
    var old = $.fn.tree;
    $.fn.tree = Plugin;
    $.fn.tree.Constructor = Tree;
    $.fn.tree.noConflict = function () {
      $.fn.tree = old;
      return this;
    };
    $(Selector.data).each(function () {
      Plugin.call($(this), null);
    });
  }

  onSubmit() {
    if (this.searchForm.invalid) {
      return;
    } else {
      this.log.Information(`Keyword Searched - ${this.f.search.value}`);
      this.router.navigate(['/search'], {
        queryParams: { q: this.f.search.value },
      });
    }
  }
}
